import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { IFormHeaderModalProp, ShopConfigurationType } from 'src/app/interface';
import { ClientShopAccountService } from 'src/app/service/client/client-shop-account/client-shop-account.service';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';

@Component({
  selector: 'client-shop-register-modal',
  templateUrl: './client-shop-register-modal.component.html',
  styleUrls: ['./client-shop-register-modal.component.scss'],
})
export class ClientShopRegisterModalComponent implements OnInit, OnDestroy {
  @Output() onCreateClient = new EventEmitter<void>();
  @Output() onRejectStart = new EventEmitter<void>();
  @Input() isModal: boolean = true;
  @Input() forceMobile: boolean = true;
  @Input() shopConfig!: ShopConfigurationType;
  @Input() phoneNumber!: string;

  public mode: 'create' | 'edit' = 'create';
  public type: 'shop' | 'client' = 'client';
  public form!: IFormHeaderModalProp;
  private _shopConfig: ShopConfigurationType | undefined = this._navParam.get('shopConfig');
  private _phoneNumber: string | undefined = this._navParam.get('phoneNumber');

  constructor(
    private _navParam: NavParams,
    private _modalCtrl: ModalController,
    private _formCtrl: FormControllerService,
    public account: ClientShopAccountService
  ) {
    this.form = this._formCtrl.setReadFormHeaderModalProp();
    this.form.headerTitle = 'label.title.signup';
  }

  async ngOnInit() {
    if (this.isModal) {
      await this.startModal();
    } else {
      await this.startComponent();
    }
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }

  private async startModal() {
    if (this._shopConfig && this._phoneNumber) {
      await this.account.start(this._shopConfig, this._phoneNumber);
    }
  }

  private async startComponent() {
    if (this.shopConfig && this.phoneNumber) {
      const start = await this.account.start(this.shopConfig, this.phoneNumber);
      if (!start) {
        this.onRejectStart.emit();
      }
    } else {
      this.onRejectStart.emit();
    }
  }

  async ngOnDestroy() {
    await this.account.completed();
  }

  public onUnderAgeChange(event: string) {
    this.account.validator.isUnderAge = event;
  }

  public async create() {
    const created = await this.account.create();
    if (created && this.isModal) {
      await this._modalCtrl.dismiss(this.account.phoneNumber);
    }

    if (created && !this.isModal) {
      this.onCreateClient.emit();
    }
  }
}
