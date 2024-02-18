import { Component, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Subject, map, takeUntil } from 'rxjs';
import { DateService } from 'src/app/service/global/date/date.service';
import { ShopClientManagementService } from 'src/app/service/shop/shop-client-management/shop-client-management.service';
import { ShopVerifyNewClientPhoneNumberPopoverComponent } from '../shop-verify-new-client-phone-number-popover/shop-verify-new-client-phone-number-popover.component';
import { ShopClientManagementUserType } from 'src/app/interface';
import { Router } from '@angular/router';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';

@Component({
  selector: 'shop-client-grid',
  templateUrl: './shop-client-grid.component.html',
  styleUrls: ['./shop-client-grid.component.scss'],
})
export class ShopClientGridComponent implements OnInit, OnDestroy {
  public kendo = inject(KendoUiService);

  @Output() onRequestNewClientPhoneNumber = new EventEmitter<string>();
  private _destroy$ = new Subject<void>();
  public loaded$ = this._clientManagement.query.loaded$;
  public loading$ = this._clientManagement.query.loading$;

  //Query;
  public selectedClients: ShopClientManagementUserType[] = this._clientManagement.query.selectedClients;
  public pageSize = this._clientManagement.query.pageSize;
  public isAuthorised$ = this._clientManagement.isAuthorised$;
  public isMedicalRelatedShop$ = this._clientManagement.isMedicalRelatedShop$;

  public isPregnant = (brithDate: string | null) => {
    return brithDate !== null;
  };

  public underAge = (dob: string) => {
    return !this._date.isOver18(dob);
  };

  constructor(
    private _clientManagement: ShopClientManagementService,
    private _date: DateService,
    private _popoverCtrl: PopoverController,
    private _router: Router
  ) {}

  async ngOnInit() {
    await this.refresh();
    this._clientManagement.query.pageSize$.pipe(takeUntil(this._destroy$)).subscribe(pageSize => {
      this.pageSize = pageSize;
    });
    this._clientManagement.query.selectedClients$.pipe(takeUntil(this._destroy$)).subscribe(clients => {
      this.selectedClients = clients;
    });
  }

  public async refresh() {
    await this._clientManagement.query.refresh();
  }

  public async onClickAdd(event: any) {
    const popover = await this._popoverCtrl.create({
      component: ShopVerifyNewClientPhoneNumberPopoverComponent,
      event: event,
      translucent: true,
      size: 'auto',
      cssClass: 'dynamic-popover-container',
    });
    await popover.present();

    const confirmation = await popover.onWillDismiss();
    if (confirmation && typeof confirmation.data === 'string') {
      this.onRequestNewClientPhoneNumber.emit(confirmation.data);
    }
  }

  public async onClickClient(clientId: string) {
    await this._router.navigateByUrl(`shop/client-management/edit/${clientId}`);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
