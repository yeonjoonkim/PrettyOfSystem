import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { ShopClientCreateAccountService } from 'src/app/service/shop/shop-client-management/shop-client-create-account/shop-client-create-account.service';
import { ShopClientManagementService } from 'src/app/service/shop/shop-client-management/shop-client-management.service';

@Component({
  selector: 'app-shop-client-create',
  templateUrl: './shop-client-create.page.html',
  styleUrls: ['./shop-client-create.page.scss'],
})
export class ShopClientCreatePage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  private _phoneNumber: string | null = this._route.snapshot.paramMap.get('phoneNumber');

  public type: 'shop' | 'client' = 'shop';
  public mode: 'create' | 'edit' = 'create';
  public isRelatedToMedical$ = this._management.isMedicalRelatedShop$;
  public isMassageShop$ = this._management.isMassageShop$;
  public isSkinCare$ = this._management.isSkinCare$;
  public isHairSalon$ = this._management.isHairSalon$;
  public isPersonalTraining$ = this._management.isPersonalTraining$;
  public isNailArt$ = this._management.isNailArt$;
  public isMobileShop$ = this._management.isMobileShop$;
  public isAuthroised$ = this._management.isAuthorised$;

  constructor(
    public account: ShopClientCreateAccountService,
    private _management: ShopClientManagementService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
  async ngOnInit() {}

  async ionViewWillEnter() {
    if (this._phoneNumber !== null) {
      this.account.start(this._phoneNumber);
    } else {
      await this.gotoClientManagement();
    }
  }

  ionViewWillLeave() {
    this._destroy$.next();
    this._destroy$.complete();
    this.account.completed();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this.account.completed();
  }

  public async gotoClientManagement() {
    this.account.completed();
    await this._router.navigateByUrl('shop/client-management');
  }

  public onUnderAgeChange(event: string) {
    this.account.validator.isUnderAge = event;
  }
}
