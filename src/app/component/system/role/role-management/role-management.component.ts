import { lastValueFrom } from 'rxjs';
import { SystemRoleService } from 'src/app/service/system/system-role/system-system-role.service';
import { Component, OnInit } from '@angular/core';
import { RoleConfigurationType } from 'src/app/interface/system/role/role.interface';
import { LanguageService } from 'src/app/service/global/language/language.service';

@Component({
  selector: 'system-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss'],
})
export class RoleManagementComponent implements OnInit {
  public roles!: RoleConfigurationType[];
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
  constructor(private _systemRole: SystemRoleService, private _language: LanguageService) {}

  async ngOnInit() {
    await this.refresh();
  }

  private async setRoleConfigurationList() {
    let result = await lastValueFrom(this._systemRole.getAllRoles());
    this.roles = result.sort(r => r.rate);
  }

  public async refresh() {
    await this._language.management.storage.refresh().then(async () => {
      await this.setRoleConfigurationList();
    });
  }
}
