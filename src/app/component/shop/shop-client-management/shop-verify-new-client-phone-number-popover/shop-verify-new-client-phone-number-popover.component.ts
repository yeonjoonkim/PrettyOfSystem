import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, PopoverController } from '@ionic/angular';
import { filter, take } from 'rxjs';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { IFormHeaderModalProp } from 'src/app/interface';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { CryptService } from 'src/app/service/global/crypt/crypt.service';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { ShopClientCreateAccountService } from 'src/app/service/shop/shop-client-management/shop-client-create-account/shop-client-create-account.service';

@Component({
  selector: 'shop-verify-new-client-phone-number-popover',
  templateUrl: './shop-verify-new-client-phone-number-popover.component.html',
  styleUrls: ['./shop-verify-new-client-phone-number-popover.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, LanguageTransformPipeModule, SharedFormModule, KendoUiModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
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
    private _crypt: CryptService,
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
              await this.navigateToCreateNewClient();
            } else {
              this.requesting = false;
            }
          } else {
            this.requesting = false;
          }
        });
    }
  }

  public async navigateToCreateNewClient() {
    const encryptedPhone = this._crypt.encryptUrlParam(this.phoneNumber);
    await this._router.navigateByUrl(`shop/client-management/create/${encryptedPhone}`);
    await this._popoverCtrl.dismiss();
  }
}
