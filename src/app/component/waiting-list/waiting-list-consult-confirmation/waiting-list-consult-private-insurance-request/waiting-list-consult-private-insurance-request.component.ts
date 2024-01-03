import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IFormHeaderModalProp, NameValuePairType, UserSettingPrivateInsuranceType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
import { PrivateHealthInsuranceService } from 'src/app/service/global/private-health-insurance/private-health-insurance.service';
import { Subject, takeUntil } from 'rxjs';
import { WaitingListConsultService } from 'src/app/service/waiting-list/waiting-list-consult/waiting-list-consult.service';
import { PopoverController } from '@ionic/angular';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
@Component({
  selector: 'waiting-list-consult-private-insurance-request',
  templateUrl: './waiting-list-consult-private-insurance-request.component.html',
  styleUrls: ['./waiting-list-consult-private-insurance-request.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaitingListConsultPrivateInsuranceRequestComponent implements OnInit, OnDestroy {
  public form!: IFormHeaderModalProp;
  private _destroy$ = new Subject<void>();
  public privateInsurance!: UserSettingPrivateInsuranceType;
  public selection!: NameValuePairType[];
  public selected!: NameValuePairType;
  public validator = {
    num: false,
  };
  public enahbleSaveBtn: boolean = false;
  constructor(
    private _insurance: PrivateHealthInsuranceService,
    private _consult: WaitingListConsultService,
    private _popoverCtrl: PopoverController,
    private _form: FormControllerService
  ) {
    this.selection = this._insurance.list;
    this.form = this._form.setReadFormHeaderModalProp();
    this.form.headerTitle = 'label.title.insuranceclaimmandatoryfield';
  }

  public handleEnabledSaveBtn() {
    this.enahbleSaveBtn = this.validator.num;
  }

  public onChangeCompany(pair: NameValuePairType) {
    this.privateInsurance.company = pair.value;
  }

  public async OnClickSave() {
    this._consult.updatePrivateInsurance(this.privateInsurance);
    await this._popoverCtrl.dismiss();
  }

  public async dismiss() {
    await this._popoverCtrl.dismiss();
  }

  ngOnInit() {
    this._consult
      .privateInsurance()
      .pipe(takeUntil(this._destroy$))
      .subscribe(privateInsurace => {
        this.privateInsurance =
          privateInsurace !== null
            ? privateInsurace
            : {
                company: Constant.Medical.Insurance.Medibank,
                memberNum: '',
                reference: '',
              };
        const company = this.selection.find(s => s.value === this.privateInsurance.company);
        this.selected = company !== undefined ? company : this._insurance.defaultCompany;
        this.handleEnabledSaveBtn();
      });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
