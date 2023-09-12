import { RoleConfigurationType } from 'src/app/interface/system/role/role.interface';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SystemRoleService } from 'src/app/service/system/system-role/system-system-role.service';
import { GlobalService } from 'src/app/service/global/global.service';
@Component({
  selector: 'system-role-list-card',
  templateUrl: './role-list-card.component.html',
  styleUrls: ['./role-list-card.component.scss'],
})
export class RoleListCardComponent implements OnInit, OnChanges {
  @Output() onUpdate = new EventEmitter<boolean>();
  @Output() roleChange = new EventEmitter<RoleConfigurationType>();
  @Input()
  get role(): RoleConfigurationType {
    return this.selectedRole;
  }
  set role(value: RoleConfigurationType) {
    this.selectedRole = value;
    this.roleChange.emit(this.selectedRole);
  }
  @Input() roles: RoleConfigurationType[] | null = [];
  public isMobile: boolean = false;
  public gridData: RoleConfigurationType[] = [];
  public selectedRole: RoleConfigurationType = {
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
  private _isModalOpen: boolean = false;

  constructor(private systemRole: SystemRoleService, public global: GlobalService) {}
  ngOnChanges(changes: SimpleChanges): void {
    let roleList: RoleConfigurationType[] | null = changes['roles'].currentValue;
    this.setGridDataList(roleList);
  }

  ngOnInit() {}

  public setGridDataList(roleList: RoleConfigurationType[] | null) {
    this.gridData = [];
    if (roleList !== null && roleList?.length > 0) {
      roleList.forEach(async r => {
        r.name = await this.global.language.transform(r.name);
        this.gridData.push(r);
      });
    }
  }
  public onClickRole(selectedRole: RoleConfigurationType) {
    this.role = this.findRole(selectedRole);
  }

  private findRole(selectedRole: RoleConfigurationType) {
    let result = this.roles?.find(r => r.id === selectedRole.id);

    return result !== undefined ? result : selectedRole;
  }

  public async onClickDeleteRole(selectedRole: RoleConfigurationType) {
    selectedRole = this.findRole(selectedRole);
    await this.systemRole.processDeleteRoleConfiguration(selectedRole);
    this.onUpdate.emit(true);
  }

  public async presentAddRole() {
    if (!this._isModalOpen) {
      this._isModalOpen = true;
      let modal = await this.systemRole.modal.prsentAddRole();
      await modal.present();
      await this.handleDismissModal(modal);
    }
  }

  public async presentEditRole(selectedRole: RoleConfigurationType) {
    if (!this._isModalOpen) {
      this._isModalOpen = true;
      selectedRole = this.findRole(selectedRole);
      let modal = await this.systemRole.modal.presentEditRole(selectedRole);
      await modal.present();
      await this.handleDismissModal(modal);
    }
  }

  private async handleDismissModal(modal: HTMLIonModalElement) {
    let result = await modal.onWillDismiss();
    this._isModalOpen = false;
    if (result?.data === 'refresh') {
      this.onUpdate.emit(true);
    }
  }
}
