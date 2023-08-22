import { IRoleConfiguration } from 'src/app/interface/system/role/role.interface';
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
  @Output() roleChange = new EventEmitter<IRoleConfiguration>();
  @Input()
  get role(): IRoleConfiguration {
    return this.selectedRole;
  }
  set role(value: IRoleConfiguration) {
    this.selectedRole = value;
    this.roleChange.emit(this.selectedRole);
  }
  @Input() roles: IRoleConfiguration[] | null = [];
  public isMobile: boolean = false;
  public gridData: IRoleConfiguration[] = [];
  public selectedRole: IRoleConfiguration = {
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

  constructor(private systemRole: SystemRoleService, public global: GlobalService) {}
  ngOnChanges(changes: SimpleChanges): void {
    let roleList: IRoleConfiguration[] | null = changes['roles'].currentValue;
    this.setGridDataList(roleList);
  }

  ngOnInit() {}

  public setGridDataList(roleList: IRoleConfiguration[] | null) {
    this.gridData = [];
    if (roleList !== null && roleList?.length > 0) {
      roleList.forEach(async r => {
        r.name = await this.global.language.transform(r.name);
        this.gridData.push(r);
      });
    }
  }
  public onClickRole(selectedRole: IRoleConfiguration) {
    this.role = this.findRole(selectedRole);
  }

  private findRole(selectedRole: IRoleConfiguration) {
    let result = this.roles?.find(r => r.id === selectedRole.id);

    return result !== undefined ? result : selectedRole;
  }

  public async onClickDeleteRole(selectedRole: IRoleConfiguration) {
    selectedRole = this.findRole(selectedRole);
    await this.systemRole.processDeleteRoleConfiguration(selectedRole);
  }

  public async presentAddRole() {
    await this.systemRole.modal.prsentAddRole();
  }

  public async presentEditRole(selectedRole: IRoleConfiguration) {
    selectedRole = this.findRole(selectedRole);
    await this.systemRole.modal.presentEditRole(selectedRole);
  }
}
