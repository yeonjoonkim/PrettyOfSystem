import { Component, OnDestroy, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import {
  BehaviorSubject,
  Subject,
  combineLatest,
  combineLatestWith,
  firstValueFrom,
  map,
  of,
  switchMap,
  takeUntil,
} from 'rxjs';
import { NameValuePairType, UserVisitShopConsentType } from 'src/app/interface';
import { UserService } from 'src/app/service/user/user.service';

export const myCoupons = 'label.title.mycoupon';
export const consultHistory = 'label.title.consulthistory';
export const marketing = 'label.title.marketing';

@Component({
  selector: 'app-user-visit-shop',
  templateUrl: './user-visit-shop.page.html',
  styleUrls: ['./user-visit-shop.page.scss'],
})
export class UserVisitShopPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  private _shopSelection = new BehaviorSubject<NameValuePairType[]>([]);
  private _selectedShop = new BehaviorSubject<NameValuePairType>({ name: '', value: '' });
  private _consent = new BehaviorSubject<UserVisitShopConsentType | null>(null);
  private _buttons = new BehaviorSubject<string[]>([marketing, consultHistory, myCoupons]);
  private _action = new BehaviorSubject<string>(marketing);

  public marketing = marketing;
  public consultHistory = consultHistory;
  public myCoupons = myCoupons;
  public requesting = false;

  get shopSelection() {
    return this._shopSelection.getValue();
  }

  set shopSelection(value: NameValuePairType[]) {
    this._shopSelection.next(value);
  }

  get selectedShop() {
    return this._selectedShop.getValue();
  }

  set selectedShop(value: NameValuePairType) {
    this._selectedShop.next(value);
  }

  get action() {
    return this._action.getValue();
  }

  set action(value: string) {
    this._action.next(value);
  }

  get consent() {
    return this._consent.getValue();
  }

  set consent(value: UserVisitShopConsentType | null) {
    this._consent.next(value);
  }

  get hasMarketingSMSConsent() {
    return this.consent !== null ? this.consent.hasMarketingSMSConsent : null;
  }

  set hasMarketingSMSConsent(value: boolean | null) {
    const consent = this.consent;
    if (consent !== null && value !== null) {
      consent.hasMarketingSMSConsent = value;
      this.consent = consent;
    }
  }

  get hasMarketingEmailConsent() {
    return this.consent !== null ? this.consent.hasMarketingEmailConsent : null;
  }

  set hasMarketingEmailConsent(value: boolean | null) {
    const consent = this.consent;
    if (consent !== null && value !== null) {
      consent.hasMarketingEmailConsent = value;
      this.consent = consent;
    }
  }

  private _selectedShop$ = this._selectedShop.asObservable();

  private _buttons$ = this._buttons.asObservable();
  private _action$ = this._action.asObservable();

  private _selection$ = this._user.data$.pipe(
    switchMap(user => {
      if (user !== null) {
        return of(
          user.visitedShops.map(shop => {
            return {
              name: shop.shopName,
              value: shop.shopId,
            } as NameValuePairType;
          })
        );
      } else {
        return of([] as NameValuePairType[]);
      }
    })
  );

  private _associatedConsent$ = this._selectedShop$.pipe(
    combineLatestWith(this._user.data$),
    switchMap(([shop, data]) => {
      if (shop.value.length > 0 && data !== null) {
        const consent = data?.visitedShops.find(s => s.shopId === shop.value);
        return of(consent !== undefined ? consent : null);
      } else {
        return of(null);
      }
    })
  );

  public prop$ = combineLatest(
    this._selection$,
    this._selectedShop,
    this._associatedConsent$,
    this._user.data$,
    this._action$,
    this._buttons$
  ).pipe(
    switchMap(([selection, selected, consent, user, action, buttons]) => {
      if (selection.length > 0 && selected && user !== null && consent !== null) {
        return of({
          selection: selection,
          selected: selected,
          consent: consent,
          user: user,
          action: action,
          buttons: buttons,
        });
      } else {
        return of(null);
      }
    })
  );

  constructor(private _user: UserService) {
    this._selection$.pipe(takeUntil(this._destroy$)).subscribe(selection => {
      this.shopSelection = selection;
      if (this.shopSelection.length > 0) {
        this.selectedShop =
          this.shopSelection.find(s => this.selectedShop.value === s.value) !== undefined
            ? this.selectedShop
            : this.shopSelection[0];
      }
    });
  }

  ngOnInit() {
    this.prop$.pipe(takeUntil(this._destroy$)).subscribe(prop => {
      if (prop !== null) {
        this.consent = prop.consent;
      }
    });
  }

  public async updateClientConsent() {
    const consent = this.consent;
    if (consent !== null) {
      const before = await firstValueFrom(this._user.data$);
      let after = cloneDeep(before);
      if (before !== null && after !== null) {
        this.requesting = true;
        const beforeConsent = after.visitedShops.find(s => s.shopId === consent.shopId);
        if (beforeConsent !== undefined) {
          const consentIndex = after.visitedShops.findIndex(s => s.shopId === consent.shopId);
          after.visitedShops[consentIndex] = consent;
          await this._user.updateUser(after, before);
          this.requesting = false;
        }
      }
    }
  }

  public isActive(name: string) {
    return this.action === name;
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
