import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Subject, filter, take } from 'rxjs';
import { IFormHeaderModalProp, UserSettingEmergencyContactType } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { WaitingListConsultService } from 'src/app/service/waiting-list/waiting-list-consult/waiting-list-consult.service';

@Component({
  selector: 'waiting-list-parent-confirmation',
  templateUrl: './waiting-list-parent-confirmation.component.html',
  styleUrls: ['./waiting-list-parent-confirmation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaitingListParentConfirmationComponent implements OnInit, OnDestroy {
  public form!: IFormHeaderModalProp;
  private _destroy$ = new Subject<void>();

  public signature!: string;
  public emergancyContact!: UserSettingEmergencyContactType;
  public enableUpdateRequestButton: boolean = false;

  public validator = {
    firstName: false,
    lastName: false,
    phoneNumber: false,
    signature: false,
  };

  constructor(
    private _consult: WaitingListConsultService,
    private _popoverCtrl: PopoverController,
    private _form: FormControllerService
  ) {
    this.form = this._form.setReadFormHeaderModalProp();
    this.form.headerTitle = 'label.title.parentconsent';
  }

  public handle() {
    this.validator.signature = this.signature.length > 0;
    this.enableUpdateRequestButton =
      this.validator.firstName &&
      this.validator.lastName &&
      this.validator.phoneNumber &&
      this.validator.signature;
  }

  public async OnClickSave() {
    this._consult.updateParentConsent(this.emergancyContact, this.signature);
    await this._popoverCtrl.dismiss();
  }

  public async dismiss() {
    await this._popoverCtrl.dismiss();
  }

  public onClickClearSignature() {
    this.signature = '';
    this.handle();
  }

  ngOnInit() {
    this._consult
      .parentconsent()
      .pipe(
        take(1),
        filter(consult => consult !== null)
      )
      .subscribe(consult => {
        if (consult !== null) {
          this.emergancyContact =
            consult.emergancyContact !== null
              ? consult.emergancyContact
              : {
                  firstName: '',
                  lastName: '',
                  phoneNumber: '',
                };
          this.signature = consult.parentSignature !== null ? consult.parentSignature : '';
          this.handle();
        }
      });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
