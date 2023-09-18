import { SystemRoleService } from 'src/app/service/system/system-role/system-system-role.service';
import { Component, OnInit } from '@angular/core';
import { RoleConfigurationType } from 'src/app/interface/system/role/role.interface';
import { NavParams } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global/global.service';
import { cloneDeep } from 'lodash-es';
@Component({
  selector: 'system-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {
  public editMode: boolean = false;
  public editedTitle: string = '';
  public role: RoleConfigurationType = {
    id: '',
    name: '',
    description: '',
    accessLevel: {
      isSystemAdmin: false,
      isAdmin: false,
      isManager: false,
      isEmployee: false,
      isReception: false,
    },
    rate: 0,
  };
  private _prevRole: RoleConfigurationType | undefined;
  constructor(
    private _global: GlobalService,
    private _systemRole: SystemRoleService,
    private _navParams: NavParams
  ) {
    this.getParams();
  }

  ngOnInit() {}

  private getParams() {
    let editable = this._navParams.get('editable');
    let role = this._navParams.get('role');

    if (editable !== undefined) {
      this.editedTitle = role?.name;
      this._prevRole = cloneDeep(role);
      this.role = role;
      this.editMode = true;
    }
  }

  /** When the system admin toggle is changed, modify the Configuration */
  public onChangeSystemAdminAccessCtrl(newAccessCtrl: boolean): void {
    if (newAccessCtrl) {
      this.role.accessLevel.isSystemAdmin = true;
      this.role.accessLevel.isAdmin = false;
      this.role.accessLevel.isManager = false;
      this.role.accessLevel.isEmployee = false;
      this.role.accessLevel.isReception = false;
    }
  }

  /** When the admin toggle is changed, modify the Configuration */
  public onChangeAdminAccessCtrl(newAccessCtrl: boolean): void {
    if (newAccessCtrl) {
      this.role.accessLevel.isSystemAdmin = false;
      this.role.accessLevel.isAdmin = true;
      this.role.accessLevel.isManager = false;
      this.role.accessLevel.isEmployee = false;
      this.role.accessLevel.isReception = false;
    }
  }

  /** When the manager toggle is changed, modify the Configuration */
  public onChangeManagerAccessCtrl(newAccessCtrl: boolean) {
    if (newAccessCtrl) {
      this.role.accessLevel.isSystemAdmin = false;
      this.role.accessLevel.isAdmin = false;
      this.role.accessLevel.isManager = true;
      this.role.accessLevel.isEmployee = false;
      this.role.accessLevel.isReception = false;
    }
  }

  /** When the reception toggle is changed, modify the Configuration */
  public onChangeReceptionAccessCtrl(newAccessCtrl: boolean): void {
    if (newAccessCtrl) {
      this.role.accessLevel.isSystemAdmin = false;
      this.role.accessLevel.isAdmin = false;
      this.role.accessLevel.isManager = false;
      this.role.accessLevel.isEmployee = false;
      this.role.accessLevel.isReception = true;
    }
  }

  /** When the employee toggle is changed, modify the Configuration */
  public onChangeEmployeeAccessCtrl(newAccessCtrl: boolean): void {
    if (newAccessCtrl) {
      this.role.accessLevel.isSystemAdmin = false;
      this.role.accessLevel.isAdmin = false;
      this.role.accessLevel.isManager = false;
      this.role.accessLevel.isEmployee = true;
      this.role.accessLevel.isReception = false;
    }
  }

  /** on click event to determine the selection of configuration and description field, then process the save method*/
  public async onClickSaveRoleConfiguration() {
    let hasSelectedConfig: boolean =
      this.role.accessLevel.isSystemAdmin ||
      this.role.accessLevel.isAdmin ||
      this.role.accessLevel.isManager ||
      this.role.accessLevel.isEmployee ||
      this.role.accessLevel.isReception;
    let hasDescription: boolean = this.role.description.length > 0;

    if (hasDescription && hasSelectedConfig) {
      await this._systemRole.processNewSaveRoleConfiguration(this.role);
    } else {
      await this.presentErroMsg(hasDescription, hasSelectedConfig);
    }
  }

  public async onClickEditRoleConfiguration() {
    let hasSelectedConfig: boolean =
      this.role.accessLevel.isSystemAdmin ||
      this.role.accessLevel.isAdmin ||
      this.role.accessLevel.isManager ||
      this.role.accessLevel.isEmployee ||
      this.role.accessLevel.isReception;
    let hasDescription: boolean = this.role.description.length > 0;

    if (hasDescription && hasSelectedConfig && this._prevRole !== undefined) {
      await this._systemRole.processUpdateRoleConfiguration(this._prevRole, this.role);
    } else {
      await this.presentErroMsg(hasDescription, hasSelectedConfig);
    }
  }

  /** During save click event, present toast error message to determine the error. */
  private async presentErroMsg(hasDescription: boolean, hasSelectedConfig: boolean): Promise<void> {
    let errormsg: string = !hasDescription
      ? await this._global.language.transform('messageerror.dscription.descriptionfield')
      : !hasSelectedConfig
      ? await this._global.language.transform('messageerror.description.config')
      : '';

    await this._global.toast.presentError(errormsg);
  }

  /**Dismiss the current add role modal */
  public async dismiss(): Promise<void> {
    await this._systemRole.modal.dismissModal();
  }
}
