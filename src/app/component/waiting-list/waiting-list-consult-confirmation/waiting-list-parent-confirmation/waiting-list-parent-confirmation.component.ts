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

  public emergancyContact!: UserSettingEmergencyContactType;
  public enableUpdateRequestButton: boolean = false;

  public validator = {
    firstName: false,
    lastName: false,
    phoneNumber: false,
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
    this.enableUpdateRequestButton =
      this.validator.firstName && this.validator.lastName && this.validator.phoneNumber;
  }

  public async OnClickSave() {
    this._consult.updateParentConsent(this.emergancyContact);
    await this._popoverCtrl.dismiss();
  }

  public async dismiss() {
    await this._popoverCtrl.dismiss();
  }

  ngOnInit() {
    this._consult.consult$
      .pipe(
        take(1),
        filter(consult => consult !== null)
      )
      .subscribe(consult => {
        if (consult !== null) {
          this.emergancyContact =
            consult.client.emergancyContact !== null
              ? consult.client.emergancyContact
              : {
                  firstName: '',
                  lastName: '',
                  phoneNumber: '',
                };
          this.handle();
        }
      });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
