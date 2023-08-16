import { Observable } from 'rxjs';
import { SystemRoleService } from '../../../../service/system/system-role/system-system-role.service';
import { Component, OnInit } from '@angular/core';
import { IRoleConfiguration } from 'src/app/interface/system/role/role.interface';

@Component({
  selector: 'system-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss'],
})

export class RoleManagementComponent implements OnInit {
  public readonly roles: Observable<IRoleConfiguration[]> = this.systemRole.valueChangeListener();
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
  constructor(private systemRole: SystemRoleService){
  }

  ngOnInit() {
  }

}
