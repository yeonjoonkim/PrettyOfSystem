import { DeviceWidthService } from './../../../../../shared/services/device-width/device-width.service';
import { IRoleConfiguration } from 'src/app/interface/system/role/role.interface';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { SystemRoleService } from 'src/app/service/system/system-role/system-system-role.service';

@Component({
  selector: 'system-role-list-card',
  templateUrl: './role-list-card.component.html',
  styleUrls: ['./role-list-card.component.scss'],
})
export class RoleListCardComponent implements OnInit {
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
  public selectedRole: IRoleConfiguration = {
    id: '',
    name: '',
    description: '',
    accessLevel: {
      isSystemAdmin: false,
      isAdmin: false,
      isManager: false,
      isEmployee: false,
      isReception: false
    },
    rate: 0
  };

  constructor(private systemRole: SystemRoleService, public deviceWidth: DeviceWidthService) {
  }

  ngOnInit() {}

  public onClickRole(selectedRole: IRoleConfiguration){
    this.role = selectedRole;
  }

  public async onClickDeleteRole(selectedRole: IRoleConfiguration){
    await this.systemRole.processDeleteRoleConfiguration(selectedRole);
  }

  public async presentAddRole(){
    await this.systemRole.modal.prsentAddRole();
  }

  public async presentEditRole(selectedRole: IRoleConfiguration){
    await this.systemRole.modal.presentEditRole(selectedRole);
  }

}
