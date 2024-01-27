import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { filter, take } from 'rxjs';
import { IFormHeaderModalProp } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { ShopClientCreateAccountService } from 'src/app/service/shop/shop-client-management/shop-client-create-account/shop-client-create-account.service';

@Component({
  selector: 'shop-verify-new-client-phone-number-popover',
  templateUrl: './shop-verify-new-client-phone-number-popover.component.html',
  styleUrls: ['./shop-verify-new-client-phone-number-popover.component.scss'],
})
export class ShopVerifyNewClientPhoneNumberPopoverComponent implements OnInit {
  public form: IFormHeaderModalProp = this._formCtrl.setReadFormHeaderModalProp();
  public phoneNumber: string = '';
  public validator: boolean = false;
  public requesting: boolean = false;

  constructor(
    private _popoverCtrl: PopoverController,
    private _createAccount: ShopClientCreateAccountService,
    private _formCtrl: FormControllerService,
    private _router: Router
  ) {
    this.form.headerTitle = 'label.title.verifyaccount';
  }

  ngOnInit() {}

  public async dismiss() {
    await this._popoverCtrl.dismiss();
  }

  async onClickVerifyAccount() {
    if (!this.requesting) {
      this.requesting = true;
      this._createAccount.shopConfig$
        .pipe(
          take(1),
          filter(config => config !== null)
        )
        .subscribe(async config => {
          if (config !== null) {
            const verification = await this._createAccount.verify(config, this.phoneNumber);
            if (verification) {
              await this._popoverCtrl.dismiss(this.phoneNumber);
            } else {
              this.requesting = false;
            }
          } else {
            this.requesting = false;
          }
        });
    }
  }
}
