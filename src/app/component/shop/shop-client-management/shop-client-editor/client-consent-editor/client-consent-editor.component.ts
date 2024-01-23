import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'client-consent-editor',
  templateUrl: './client-consent-editor.component.html',
  styleUrls: ['./client-consent-editor.component.scss'],
})
export class ClientConsentEditorComponent implements OnInit {
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

  constructor() {}

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
}
