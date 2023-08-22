import { SystemRoleService } from '../../../../service/system/system-role/system-system-role.service';
import { Component, OnInit } from '@angular/core';
import { IRoleConfiguration } from 'src/app/interface/system/role/role.interface';
import { NavParams } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global/global.service';
@Component({
  selector: 'system-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {
  public editMode: boolean = false;
  public editedTitle: string = '';
  private prevRole: IRoleConfiguration | undefined;
  public role: IRoleConfiguration = {
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
  constructor(
    private global: GlobalService,
    private systemRole: SystemRoleService,
    private navParams: NavParams
  ) {
    this.getParams();
  }

  ngOnInit() {}

  private getParams() {
    let editable = this.navParams.get('editable');
    let role = this.navParams.get('role');

    if (editable !== undefined) {
      this.editedTitle = role?.name;
      this.prevRole = role;
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
      await this.systemRole.processNewSaveRoleConfiguration(this.role);
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

    if (hasDescription && hasSelectedConfig && this.prevRole !== undefined) {
      await this.systemRole.processUpdateRoleConfiguration(this.prevRole, this.role);
    } else {
      await this.presentErroMsg(hasDescription, hasSelectedConfig);
    }
  }

  /** During save click event, present toast error message to determine the error. */
  private async presentErroMsg(hasDescription: boolean, hasSelectedConfig: boolean): Promise<void> {
    let errormsg: string = !hasDescription
      ? await this.global.language.transform('message.error.descriptionfield')
      : !hasSelectedConfig
      ? await this.global.language.transform('message.error.config')
      : '';

    await this.global.toast.presentError(errormsg);
  }

  /**Dismiss the current add role modal */
  public async dismiss(): Promise<void> {
    await this.systemRole.modal.dismissModal();
  }
}
