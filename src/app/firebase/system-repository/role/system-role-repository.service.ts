import { RoleConfigurationType } from 'src/app/interface/system/role/role.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { lastValueFrom, map, Observable } from 'rxjs';
import * as Db from 'src/app/constant/firebase-path';

@Injectable({
  providedIn: 'root',
})
export class SystemRoleRepositoryService {
  private readonly _timeStamp = { lastModifiedDate: new Date() };

  constructor(private _afs: AngularFirestore) {}

  /** This will return as Observalble of all role configs  */
  public getRoleConfigurations(): Observable<RoleConfigurationType[]> {
    return this._afs
      .collection<RoleConfigurationType>(Db.Context.System.Role.Configuration, ref =>
        ref.orderBy('rate')
      )
      .get()
      .pipe(
        map(snapshot => {
          return snapshot.docs.map(doc => {
            return doc.data();
          });
        })
      );
  }

  public valueChangeListener(): Observable<RoleConfigurationType[]> {
    return this._afs
      .collection<RoleConfigurationType>(Db.Context.System.Role.Configuration, ref =>
        ref.orderBy('rate')
      )
      .valueChanges()
      .pipe(
        map(roleConfigs =>
          roleConfigs.map(rc => {
            return rc;
          })
        )
      );
  }

  /** This will add new System Role */
  public async addSystemRoleConfiguration(newConfig: RoleConfigurationType) {
    let newId = this._afs.createId();
    newConfig.id = newId;
    try {
      await this._afs
        .collection(Db.Context.System.Role.Configuration)
        .doc(newConfig.id)
        .set({ ...newConfig, ...this._timeStamp });
    } catch (e) {
      console.error(e);
    }
  }

  /** This will get only selectedId */
  public async getSelectedSystemRole(selectedId: string) {
    let roles = await lastValueFrom(this.getRoleConfigurations());
    return roles.find(role => role.id === selectedId);
  }

  /** This will update the value of config */
  public async updateSystemRoleConfiguration(config: RoleConfigurationType) {
    await this._afs
      .doc(Db.Context.System.Role.Configuration + '/' + config.id)
      .update({ ...config, ...this._timeStamp });
  }

  /** This will delete the value of config*/
  public async deleteSystemRoleConfiguration(id: string) {
    await this._afs.doc(Db.Context.System.Role.Configuration + '/' + id).delete();
  }
}
