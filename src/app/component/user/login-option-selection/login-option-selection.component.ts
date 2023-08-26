import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import * as Constant from 'src/app/constant/constant';
import { RoleRateService } from 'src/app/service/authentication/role-rate/role-rate.service';
import { IUserLoginOption } from 'src/app/interface/user/user.interface';
@Component({
  selector: 'login-option-selection',
  templateUrl: './login-option-selection.component.html',
  styleUrls: ['./login-option-selection.component.scss'],
})
export class LoginOptionSelectionComponent implements OnInit, OnChanges {
  @Output() loginOptionChange = new EventEmitter<IUserLoginOption>();
  @Input() componentMode: 'login' | 'form' = 'form';
  @Input() roleRate: Constant.RoleAccessRateType = Constant.Default.RoleAccessRateType.Reception;
  @Input()
  get loginOption(): IUserLoginOption {
    return this.inputLoginOption;
  }
  set loginOption(value: IUserLoginOption) {
    this.inputLoginOption = value;
    this.loginOptionChange.emit(value);
  }

  public inputLoginOption: IUserLoginOption = { id: '', phoneNumber: true, email: false };
  public readOnly: boolean = true;

  constructor(private roleRateService: RoleRateService) {}

  ngOnInit() {
    this.setReadOnlyByComponentMode();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Component mode change;
    const componentModeChange: SimpleChange = changes['componentMode'];
    this.onComponentModeChange(componentModeChange);

    //Role Rate Change
    const roleRateChange: SimpleChange = changes['roleRate'];
    this.onRoleRateChange(roleRateChange);
  }

  public onClickEmailButton() {
    let email: IUserLoginOption = { id: '', phoneNumber: false, email: true };
    this.inputLoginOption = email;
    this.loginOption = this.readOnly ? this.loginOption : this.inputLoginOption;
  }

  public onClickPhoneButton() {
    let email: IUserLoginOption = { id: '', phoneNumber: true, email: false };
    this.inputLoginOption = email;
    this.loginOption = this.readOnly ? this.loginOption : this.inputLoginOption;
  }

  private onRoleRateChange(rateChange: SimpleChange) {
    let changes: boolean =
      rateChange?.currentValue !== rateChange?.previousValue || rateChange?.firstChange;
    if (changes) {
      this.setLoginOptionByRoleRate(this.roleRate);
    }
  }

  private onComponentModeChange(modeChange: SimpleChange) {
    let changes: boolean =
      modeChange?.currentValue !== modeChange?.previousValue || modeChange?.firstChange;
    console.log(changes);
    if (changes) {
      this.setReadOnlyByComponentMode();
    }
  }

  private setLoginOptionByRoleRate(currentValue: Constant.RoleAccessRateType) {
    let option: IUserLoginOption = this.roleRateService.setLoginOptionByRate(currentValue);
    this.loginOption = option;
  }

  private setReadOnlyByComponentMode() {
    this.readOnly = this.componentMode === 'login' ? false : true;
  }
}
