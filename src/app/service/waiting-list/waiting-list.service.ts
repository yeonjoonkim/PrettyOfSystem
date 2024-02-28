import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  combineLatestWith,
  distinctUntilChanged,
  filter,
  map,
  of,
  switchMap,
} from 'rxjs';
import { UserVisitShopConsentType, WaitingListSessionType } from 'src/app/interface';
import { LanguageService } from '../global/language/language.service';
import { Router } from '@angular/router';
import { ToastService } from '../global/toast/toast.service';
import { ClientService } from '../client/client.service';
import { WaitingListUrlService } from '../internal-api/waiting-list-url/waiting-list-url.service';
import { WaitngListShopService } from './waiting-list-shop/waitng-list-shop.service';
import { WaitingListCartService } from './waiting-list-cart/waiting-list-cart.service';
import { Cart } from 'src/app/interface/booking/cart/cart.interface';
import { DateService } from '../global/date/date.service';
import { ShopConsultRepositoryService } from 'src/app/firebase/shop-repository/shop-consult-repository/shop-consult-repository.service';
import { WaitingListRepositoryService } from 'src/app/firebase/internal-api-repository/waiting-list-repository/waiting-list-repository.service';

@Injectable({
  providedIn: 'root',
})
export class WaitingListService {
  //Start Session;
  private _requestConsult = new BehaviorSubject<boolean>(false);
  private _waitingListSession = new BehaviorSubject<WaitingListSessionType | null>(null);
  private _startSessionShopId = new BehaviorSubject<string | null>(null);
  public waitingListSession$ = this._waitingListSession.asObservable();
  public startSessionShopId$ = this._startSessionShopId.asObservable();
  public requestConsult$ = this._requestConsult.asObservable();
  public session$ = this.waitingListSession$.pipe(
    switchMap(session => {
      if (session !== null) {
        return this._waitingListRepo.sessionValueListener(session.id);
      } else {
        return of(null);
      }
    })
  );

  public start$!: Observable<boolean | null>;
  public isLoading$!: Observable<boolean>;
  public isLoaded$!: Observable<boolean>;
  public cart$!: Observable<Cart | null>;
  public consent$: Observable<UserVisitShopConsentType | null> = of(null);

  set requestConsult(value: boolean) {
    this._requestConsult.next(value);
  }
  get requestConsult() {
    return this._requestConsult.getValue();
  }

  constructor(
    public shop: WaitngListShopService,
    public client: ClientService,
    public cart: WaitingListCartService,
    private _url: WaitingListUrlService,
    private _router: Router,
    private _toaster: ToastService,
    private _language: LanguageService,
    private _consultRepo: ShopConsultRepositoryService,
    private _date: DateService,
    private _waitingListRepo: WaitingListRepositoryService
  ) {
    this.shop.config$ = this.shop.shopConfigurationValueListener(this.startSessionShopId$);
    this.startWaitingList();
    this.loadingWaitingList();
    this.loadWaitingList();
    this.consent();
    this.cart$ = this.cart.cart$;
  }

  public async deleteSession(sessionId: string) {
    return await this._waitingListRepo.deleteSession(sessionId);
  }

  public completeSession() {
    this._waitingListSession.complete();
    this._startSessionShopId.complete();
    this.cart.complete();
  }

  public async validateSession(sessionId: string | null) {
    if (sessionId === null) {
      await this.invalidSessionId();
    } else {
      const result = await this._url.getSession(sessionId);
      if (result !== null) {
        this._waitingListSession.next(result);
        this._startSessionShopId.next(result.shopId);
      } else {
        await this.invalidSessionId();
      }
    }
  }

  public isTimeOut() {
    return this.waitingListSession$.pipe(
      switchMap(session => {
        if (session !== null) {
          const currentTime = this._date.transform.formatLocalDateTime(this._date.shopNow(null));

          return of(currentTime >= session.expiredDate);
        } else {
          return of(false);
        }
      })
    );
  }

  public isAvailableTime() {
    return this.start$.pipe(
      combineLatestWith(this.cart.cart$),
      filter(([start, cart]) => start === true && cart !== null),
      switchMap(([start, cart]) => {
        if (start && cart !== null && cart.selectedTime !== null) {
          return this._consultRepo.isAvailableDateTime(
            cart.shopId,
            cart.specialist.id,
            cart.selectedTime.start,
            cart.selectedTime.end
          );
        } else {
          return of(true);
        }
      })
    );
  }

  public async invalidSessionId() {
    const errorMsg = await this._language.transform('messagefail.title.accessdenied');
    await this._toaster.presentError(errorMsg);
    await this.cart.complete();
    this._router.navigateByUrl('booking');
  }

  private startWaitingList() {
    this.start$ = this.startSessionShopId$.pipe(
      combineLatestWith(this.client.isLoggedin$),
      switchMap(([startId, isLogin]) => {
        if (startId === null) {
          return of(null);
        } else if (startId !== null && !isLogin) {
          return of(false);
        } else if (startId !== null && isLogin) {
          return of(true);
        } else {
          return of(null);
        }
      })
    );
  }

  private todayConsults() {
    return this.start$.pipe(
      combineLatestWith(this.shop.config$, this.cart$),
      filter(([start, config, cart]) => cart !== null && start === true && config !== null),
      switchMap(([start, config, cart]) => {
        if (start && config && cart) {
          const today = this._date.startDay(cart.dateTime);
          return this._consultRepo.getScheduledConsultsForDayValueChangeListener(today, config.id);
        } else {
          return of([]);
        }
      })
    );
  }

  private specialists() {
    return this.start$.pipe(
      combineLatestWith(this.cart.relatedSpecialistIds(), this.shop.config$),
      filter(([start, specialistIds, config]) => start === true && specialistIds !== null && config !== null),
      switchMap(([start, specialistIds, shopConfig]) => {
        if (start && specialistIds && shopConfig) {
          return this.shop.activeSpecialist(shopConfig.id);
        } else {
          return of(null);
        }
      }),
      distinctUntilChanged()
    );
  }

  public todaySpecialists() {
    return this.specialists().pipe(
      combineLatestWith(this.shop.config$),
      filter(([specialists, config]) => specialists !== null && config !== null),
      switchMap(([specialists, shopConfig]) => {
        if (shopConfig && specialists) {
          //const startOfDay = this._date.startDay(this._date.shopNow(shopConfig.timezone));
          return of([]);
        } else {
          return of(null);
        }
      })
    );
  }

  public selectTodaySpecialistTime() {
    return this.todaySpecialists().pipe(
      combineLatestWith(this.cart$, this.shop.config$, this.todayConsults()),
      filter(([specialists, cart, config]) => specialists !== null && cart !== null && config !== null),
      switchMap(([specialists, cart, config, consults]) => {
        if (specialists && cart && config) {
          // const today = this._date.startDay(this._date.shopNow(config.timezone));
          // const specialist = specialists.find(s => s.employeeId === cart.specialist.id);
          // if (specialist !== undefined && specialist.employeeId.length > 0) {
          //   const availableTimeSheet = specialist.avaliable.find(a => a.date === today);
          //   const timeSheet = this._employee.timeSheet.getAvailableTimeSheet(
          //     availableTimeSheet,
          //     config.timezone,
          //     today
          //   );
          //   const scheduleTime = consults
          //     .filter(consult => consult.associatedEmployee.id === specialist.employeeId)
          //     .filter(consult => consult.scheduled !== null)
          //     .map(c => c.scheduled as ConsultScheduleTimeType);

          //   const available = this._employee.timeSheet.deleteUnavailableTimeByConsult(timeSheet, scheduleTime);
          //   const leftOverTimeSheet = this._employee.timeSheet.simulateTimeSheetByCheckOut(
          //     available,
          //     cart.totalMin,
          //     cart.checkout
          //   );
          //   return of(leftOverTimeSheet);
          return of([]);
        } else {
          // const anyoneTimeSheet = this._employee.timeSheet.anyoneTimeSheet(
          //   config.id,
          //   config.timezone,
          //   config.setting.waitingList.intervalMin,
          //   config.operatingHours
          // );
          // const availableTimeSheet = anyoneTimeSheet.avaliable.find(a => a.date === today);
          // const timeSheet = this._employee.timeSheet.getAvailableTimeSheet(
          //   availableTimeSheet,
          //   config.timezone,
          //   today
          // );

          // return of(
          //   this._employee.timeSheet.simulateTimeSheetByCheckOut(timeSheet, cart.totalMin, cart.checkout)
          // );
          //}
          return of([]);
        }
      })
    );
  }

  private consent() {
    this.consent$ = this.shop.config$.pipe(
      combineLatestWith(this.client.info$),
      switchMap(([config, client]) => {
        if (config !== null && client !== null) {
          const consent = client.visitedShops.find(consent => consent.shopId === config.id);
          return of(
            consent !== undefined
              ? consent
              : {
                  shopId: config.id,
                  shopName: config.name,
                  isVIP: false,
                  hasMarketingEmailConsent: true,
                  hasMarketingSMSConsent: true,
                  hasTermandConditionConsent: true,
                  hasReuseForm: true,
                  agreedDate: this._date.transform.formatLocalDateTime(this._date.shopNow(config.timezone)),
                }
          );
        } else {
          return of(null);
        }
      })
    );
  }

  private loadingWaitingList() {
    this.isLoading$ = this.start$.pipe(
      switchMap(start => {
        if (start === null) {
          return of(true);
        } else {
          return of(false);
        }
      })
    );
  }

  private loadWaitingList() {
    this.isLoaded$ = this.isLoading$.pipe(
      switchMap(loading => {
        if (!loading) {
          return of(true);
        } else {
          return of(false);
        }
      })
    );
  }
}
