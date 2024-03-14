import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SignatureTransferReceiverComponent } from 'src/app/component/signature-transfer/signature-transfer-receiver/signature-transfer-receiver.component';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';
import { SignatureTransferService } from 'src/app/service/signature-transfer/signature-transfer.service';

@Component({
  selector: 'client-consent-editor',
  templateUrl: './client-consent-editor.component.html',
  styleUrls: ['./client-consent-editor.component.scss'],
})
export class ClientConsentEditorComponent implements OnInit {
  public kendo = inject(KendoUiService);

  @Input() forceMobile!: boolean;
  @Input() isRelatedToMedical!: boolean;
  @Input() isMassageShop!: boolean;
  @Input() isSkinCare!: boolean;
  @Input() isHairSalon!: boolean;
  @Input() isPersonalTraining!: boolean;
  @Input() isNailArt!: boolean;
  @Input() isMobileShop!: boolean;

  @Input() validator!: boolean;
  @Input() type: 'client' | 'shop' = 'shop';
  @Input() mode: 'create' | 'edit' = 'create';

  @Output() hasMarketingEmailConsentChange = new EventEmitter<boolean>();
  @Output() hasMarketingSMSConsentChange = new EventEmitter<boolean>();
  @Output() hasTermandConditionConsentChange = new EventEmitter<boolean>();
  @Output() signatureChange = new EventEmitter<string | null>();
  @Output() signatureValidatorChange = new EventEmitter<boolean>();
  @Output() onClickAction = new EventEmitter<void>();
  @Output() onClickDelete = new EventEmitter<void>();

  @Input() signatureValidator!: boolean;
  @Input() hasMarketingEmailConsent!: boolean;
  @Input() hasMarketingSMSConsent!: boolean;
  @Input() hasTermandConditionConsent!: boolean;
  @Input() signature!: string | null;

  public processLink = false;

  constructor(
    private _popover: PopoverController,
    private _transfer: SignatureTransferService
  ) {}

  ngOnInit() {
    this.start();
  }

  private start() {
    this.signature = this.signature === null && this.isRelatedToMedical ? '' : this.signature;
    this.onChangeSignature(this.signature);
    this.hasTermandConditionConsentChange.emit(this.hasTermandConditionConsent);
  }

  public onChangeSignature(signature: string | null) {
    this.signatureChange.emit(signature);
    this.validateSignature();
  }

  private validateSignature() {
    this.signatureValidator = this.isRelatedToMedical
      ? this.signature !== null && this.signature.length > 0
      : true;
    this.signatureValidatorChange.emit(this.signatureValidator);
  }

  onClickClearSignature() {
    this.signature = '';
    this.signatureChange.emit('');
    this.validateSignature();
  }

  async onClickLink(event: Event) {
    if (!this.processLink) {
      this.processLink = true;
      await this._transfer.create({
        isHairSalon: this.isHairSalon,
        isMassageTheraphy: this.isMassageShop,
        isMobileShop: this.isMobileShop,
        isNailArt: this.isNailArt,
        isPersonalTrainning: this.isPersonalTraining,
        isSkinCare: this.isSkinCare,
      });
      const popover = await this._popover.create({
        component: SignatureTransferReceiverComponent,
        event: event,
        translucent: true,
        backdropDismiss: false,
        size: 'auto',
        cssClass: 'signature-transfer-popover-container',
      });
      await popover.present();
      const result = await popover.onWillDismiss();
      if (result && result.data !== undefined) {
        this.signature = result.data;
        this.signatureChange.emit(result.data);
      }
      await this._transfer.delete();
      this.processLink = false;
    }
  }
}
