import { RoleConfigurationType } from 'src/app/interface/system/role/role.interface';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, map, Observable } from 'rxjs';
import * as Db from 'src/app/constant/firebase-path';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { FirebaseApiService, createKeyMap, Query } from '../../firebase-api/firebase-api.service';

const param = createKeyMap<RoleConfigurationType>(['id', 'description', 'accessLevel', 'name', 'rate']);
@Injectable({
  providedIn: 'root',
})
export class SystemRoleRepositoryService {
  private _api = inject(FirebaseApiService);
  private readonly _timeStamp = { lastModifiedDate: new Date() };

  constructor(private _toaster: FirebaseToasterService) {}

  /** This will return as Observalble of all role configs  */
  public getRoleConfigurations(): Observable<RoleConfigurationType[]> {
    return this._api.getDocuments<RoleConfigurationType>(Db.Context.System.Role.Configuration, ref =>
      ref.orderBy(param.rate)
    );
  }

  public subscribeAvailableRoles(role: RoleConfigurationType) {
    return this._api.getDocuments<RoleConfigurationType>(Db.Context.System.Role.Configuration, ref =>
      ref.where(param.rate, Query.LessThanOrEqual, role.rate).orderBy(param.rate)
    );
  }

  public valueChangeListener(): Observable<RoleConfigurationType[]> {
    return this._api.valueChangeDocuments<RoleConfigurationType>(Db.Context.System.Role.Configuration, ref =>
      ref.orderBy(param.rate)
    );
  }

  /** This will get only selectedId */
  public async getSelectedSystemRole(selectedId: string) {
    let roles = await lastValueFrom(this.getRoleConfigurations());
    return roles.find(role => role.id === selectedId);
  }

  /** This will add new System Role */
  public async addSystemRoleConfiguration(newConfig: RoleConfigurationType) {
    const addCommand = { ...newConfig, ...this._timeStamp };
    try {
      const saved = await this._api.set<RoleConfigurationType>(Db.Context.System.Role.Configuration, addCommand);

      if (saved !== null) {
        await this._toaster.addSuccess();
      } else {
        await this._toaster.addFail('');
      }

      return saved !== null;
    } catch (error) {
      await this._toaster.addFail(error);
      console.error(error);
      return false;
    }
  }

  /** This will update the value of config */
  public async updateSystemRoleConfiguration(config: RoleConfigurationType) {
    try {
      const updated = await this._api.updateDocument<RoleConfigurationType>(Db.Context.System.Role.Configuration, {
        ...config,
        ...this._timeStamp,
      });
      if (updated) {
        await this._toaster.updateSuccess();
      } else {
        await this._toaster.updateFail('');
      }
      return updated;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  /** This will delete the value of config*/
  public async deleteSystemRoleConfiguration(id: string) {
    try {
      const deleted = await this._api.delete<RoleConfigurationType>(Db.Context.System.Role.Configuration, id);
      if (deleted) {
        await this._toaster.deleteSuccess();
      } else {
        await this._toaster.deleteFail('');
      }

      return deleted;
    } catch (error) {
      await this._toaster.deleteFail(error);
      console.error(error);
      return false;
    }
  }
}
