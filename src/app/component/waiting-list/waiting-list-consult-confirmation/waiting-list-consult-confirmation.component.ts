import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Subject, filter, takeUntil, distinctUntilChanged, map, firstValueFrom } from 'rxjs';
import { WaitingListConsultService } from 'src/app/service/waiting-list/waiting-list-consult/waiting-list-consult.service';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';
import { WaitingListConsultPrivateInsuranceRequestComponent } from './waiting-list-consult-private-insurance-request/waiting-list-consult-private-insurance-request.component';
import { WaitingListParentConfirmationComponent } from './waiting-list-parent-confirmation/waiting-list-parent-confirmation.component';

@Component({
  selector: 'waiting-list-consult-confirmation',
  templateUrl: './waiting-list-consult-confirmation.component.html',
  styleUrls: ['./waiting-list-consult-confirmation.component.scss'],
})
export class WaitingListConsultConfirmationComponent implements OnInit, OnDestroy {
  @Input() sessionId!: string;
  private _destroy$ = new Subject<void>();

  public prop$ = this._consult.prop().pipe(
    distinctUntilChanged(),
    filter(prop => prop !== null)
  );
  public validator = this._consult.validator();
  public consult$ = this._consult.consent$;
  public hasPrivateInsurance$ = this._consult
    .privateInsurance()
    .pipe(map(privateInsurance => privateInsurance !== null));

  public hasParentConsent$ = this._consult
    .parentconsent()
    .pipe(
      map(consent =>
        consent !== null
          ? consent.emergancyContact !== null &&
            consent.parentSignature !== null &&
            consent.parentSignature.length > 0 &&
            !consent.isOver18
          : false
      )
    );

  private _hasOpenPopover: boolean = false;

  constructor(
    private _consult: WaitingListConsultService,
    private _waitingList: WaitingListService,
    private _router: Router,
    private _popoverCtrl: PopoverController
  ) {}

  async ngOnInit() {
    this.prop$.pipe(takeUntil(this._destroy$)).subscribe(prop => {
      if (prop) {
        this._consult.updateConsultInfo(
          prop.cart,
          prop.client,
          prop.shopConfig,
          prop.isShopInsuranceProvider,
          prop.hasInsuranceCartCheckout,
          prop.isClientOver18,
          prop.isClientPregrant,
          prop.isFirstVisit
        );
      }
    });
  }

  public async deleteInsuranceFromCart() {
    const sessionId = await firstValueFrom(this._waitingList.startSessionShopId$);
    if (sessionId !== null) {
      await this._waitingList.cart.deleteInsurance();
      await this._router.navigateByUrl(`waiting-list/${sessionId}/cart`);
    }
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public async displayPrivateInsurance() {
    if (!this._hasOpenPopover) {
      this._hasOpenPopover = true;
      const popover = await this._popoverCtrl.create({
        component: WaitingListConsultPrivateInsuranceRequestComponent,
        translucent: true,
        size: 'auto',
        cssClass: 'center-popover-container',
      });
      await popover.present();

      const dismiss = await popover.onDidDismiss();
      if (dismiss) {
        this._hasOpenPopover = false;
      }
    }
  }

  public async displayParentConfirmation() {
    if (!this._hasOpenPopover) {
      this._hasOpenPopover = true;
      const popover = await this._popoverCtrl.create({
        component: WaitingListParentConfirmationComponent,
        translucent: true,
        size: 'auto',
        cssClass: 'center-popover-container',
      });
      await popover.present();

      const dismiss = await popover.onDidDismiss();
      if (dismiss) {
        this._hasOpenPopover = false;
      }
    }
  }
}
