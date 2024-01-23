import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopClientEditAccountService } from 'src/app/service/shop/shop-client-management/shop-client-edit-account/shop-client-edit-account.service';
import { ShopClientManagementService } from 'src/app/service/shop/shop-client-management/shop-client-management.service';

@Component({
  selector: 'app-shop-client-edit',
  templateUrl: './shop-client-edit.page.html',
  styleUrls: ['./shop-client-edit.page.scss'],
})
export class ShopClientEditPage implements OnInit {
  private _destroy$ = new Subject<void>();
  private _clientId: string | null = this._route.snapshot.paramMap.get('clientId');

  public type: 'shop' | 'client' = 'shop';
  public mode: 'create' | 'edit' = 'edit';
  public isRelatedToMedical$ = this._management.isMedicalRelatedShop$;
  public isMassageShop$ = this._management.isMassageShop$;
  public isSkinCare$ = this._management.isSkinCare$;
  public isHairSalon$ = this._management.isHairSalon$;
  public isPersonalTraining$ = this._management.isPersonalTraining$;
  public isNailArt$ = this._management.isNailArt$;
  public isMobileShop$ = this._management.isMobileShop$;
  public isAuthroised$ = this._management.isAuthorised$;

  constructor(
    public account: ShopClientEditAccountService,
    private _management: ShopClientManagementService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
  async ngOnInit() {
    if (this._clientId === null) {
      await this.gotoClientManagement();
    } else {
      await this.account.start(this._clientId);
    }
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public async gotoClientManagement() {
    await this._router.navigateByUrl('shop/client-management');
  }

  public onUnderAgeChange(event: string) {
    this.account.validator.isUnderAge = event;
  }
}
