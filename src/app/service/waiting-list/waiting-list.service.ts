import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  combineLatestWith,
  distinctUntilChanged,
  filter,
  map,
  of,
  switchMap,
} from 'rxjs';
import { ConsultScheduleTimeType, UserVisitShopConsentType, WaitingListSessionType } from 'src/app/interface';
import { LanguageService } from '../global/language/language.service';
import { Router } from '@angular/router';
import { ToastService } from '../global/toast/toast.service';
import { ClientService } from '../client/client.service';
import { WaitingListUrlService } from '../internal-api/waiting-list-url/waiting-list-url.service';
import { WaitngListShopService } from './waiting-list-shop/waitng-list-shop.service';
import { WaitingListCartService } from './waiting-list-cart/waiting-list-cart.service';
import { Cart } from 'src/app/interface/booking/cart/cart.interface';
import { EmployeeService } from '../employee/employee.service';
import { DateService } from '../global/date/date.service';
import { ShopConsultRepositoryService } from 'src/app/firebase/shop-repository/shop-consult-repository/shop-consult-repository.service';

@Injectable({
  providedIn: 'root',
})
export class WaitingListService {
  //Start Session;
  private _waitingListSession = new BehaviorSubject<WaitingListSessionType | null>(null);
  private _startSessionShopId = new BehaviorSubject<string | null>(null);
  public waitingListSession$ = this._waitingListSession.asObservable();
  public startSessionShopId$ = this._startSessionShopId.asObservable();

  public start$!: Observable<boolean | null>;
  public isLoading$!: Observable<boolean>;
  public isLoaded$!: Observable<boolean>;
  public cart$!: Observable<Cart | null>;
  public consent$: Observable<UserVisitShopConsentType | null> = of(null);

  constructor(
    public shop: WaitngListShopService,
    public client: ClientService,
    public cart: WaitingListCartService,
    private _url: WaitingListUrlService,
    private _router: Router,
    private _toaster: ToastService,
    private _language: LanguageService,
    private _employee: EmployeeService,
    private _consultRepo: ShopConsultRepositoryService,
    private _date: DateService
  ) {
    this.shop.config$ = this.shop.shopConfigurationValueListener(this.startSessionShopId$);
    this.startWaitingList();
    this.loadingWaitingList();
    this.loadWaitingList();
    this.consent();
    this.cart$ = this.cart.cart$;
  }

  public completeSession() {
    this._waitingListSession.complete();
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
    return combineLatest([this.start$, this.cart.cart$]).pipe(
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
    this.start$ = combineLatest([this.startSessionShopId$, this.client.isLoggedin$]).pipe(
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
          return this.shop.activeSpecialist(shopConfig.id).pipe(
            map(specialists => {
              const specialistList =
                specialistIds.length === 0
                  ? specialists
                  : specialists.filter(specialist => specialistIds.includes(specialist.userId));
              return specialistList.map(specialist =>
                this._employee.timeSheet.set(
                  specialist,
                  shopConfig.timezone,
                  shopConfig.setting.waitingList.intervalMin
                )
              );
            })
          );
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
          const startOfDay = this._date.startDay(this._date.shopNow(shopConfig.timezone));
          const todaySpecialists = specialists.filter(specialist => {
            const today = specialist.avaliable.find(s => s.date === startOfDay);
            return today !== undefined ? today.isWorking : false;
          });
          return of(
            todaySpecialists.length > 2
              ? [this._employee.timeSheet.defaultAnyone(todaySpecialists[0]), ...todaySpecialists]
              : todaySpecialists
          );
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
          const today = this._date.startDay(this._date.shopNow(config.timezone));
          const specialist = specialists.find(s => s.employeeId === cart.specialist.id);
          if (specialist !== undefined && specialist.employeeId.length > 0) {
            const availableTimeSheet = specialist.avaliable.find(a => a.date === today);
            const timeSheet = this._employee.timeSheet.getAvailableTimeSheet(
              availableTimeSheet,
              config.timezone,
              today
            );
            const leftOverTimeSheet = this._employee.timeSheet.simulateTimeSheetByCheckOut(
              timeSheet,
              cart.totalMin,
              cart.checkout
            );
            const scheduleTime = consults
              .filter(consult => consult.associatedEmployee.id === specialist.employeeId)
              .filter(consult => consult.scheduled !== null)
              .map(c => c.scheduled as ConsultScheduleTimeType);

            const available = this._employee.timeSheet.deleteUnavailableTimeByConsult(
              leftOverTimeSheet,
              scheduleTime
            );
            return of(available);
          } else {
            const anyoneTimeSheet = this._employee.timeSheet.anyoneTimeSheet(
              config.id,
              config.timezone,
              config.setting.waitingList.intervalMin,
              config.operatingHours
            );
            const availableTimeSheet = anyoneTimeSheet.avaliable.find(a => a.date === today);
            const timeSheet = this._employee.timeSheet.getAvailableTimeSheet(
              availableTimeSheet,
              config.timezone,
              today
            );

            return of(
              this._employee.timeSheet.simulateTimeSheetByCheckOut(timeSheet, cart.totalMin, cart.checkout)
            );
          }
        } else {
          return of(null);
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
