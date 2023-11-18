import { RoleConfigurationType } from 'src/app/interface/system/role/role.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { lastValueFrom, map, Observable } from 'rxjs';
import * as Db from 'src/app/constant/firebase-path';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';

@Injectable({
  providedIn: 'root',
})
export class SystemRoleRepositoryService {
  private readonly _timeStamp = { lastModifiedDate: new Date() };

  constructor(
    private _afs: AngularFirestore,
    private _toaster: FirebaseToasterService
  ) {}

  /** This will return as Observalble of all role configs  */
  public getRoleConfigurations(): Observable<RoleConfigurationType[]> {
    return this._afs
      .collection<RoleConfigurationType>(Db.Context.System.Role.Configuration, ref => ref.orderBy('rate'))
      .get()
      .pipe(
        map(snapshot => {
          return snapshot.docs.map(doc => {
            return doc.data();
          });
        })
      );
  }

  public subscribeAvailableRoles(role: RoleConfigurationType) {
    return this._afs
      .collection<RoleConfigurationType>(Db.Context.System.Role.Configuration, ref =>
        ref.where('rate', '<=', role.rate).orderBy('rate')
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
      .collection<RoleConfigurationType>(Db.Context.System.Role.Configuration, ref => ref.orderBy('rate'))
      .valueChanges()
      .pipe(
        map(roleConfigs =>
          roleConfigs.map(rc => {
            return rc;
          })
        )
      );
  }

  /** This will get only selectedId */
  public async getSelectedSystemRole(selectedId: string) {
    let roles = await lastValueFrom(this.getRoleConfigurations());
    return roles.find(role => role.id === selectedId);
  }

  /** This will add new System Role */
  public async addSystemRoleConfiguration(newConfig: RoleConfigurationType) {
    const newId = this._afs.createId();
    const collection = Db.Context.System.Role.Configuration;
    newConfig.id = newId;
    const addCommand = { ...newConfig, ...this._timeStamp };

    try {
      await this._afs.collection(collection).doc(newConfig.id).set(addCommand);
      await this._toaster.addSuccess();
      return true;
    } catch (error) {
      await this._toaster.addFail(error);
      console.error(error);
      return false;
    }
  }

  /** This will update the value of config */
  public async updateSystemRoleConfiguration(config: RoleConfigurationType) {
    const doc = Db.Context.System.Role.Configuration + '/' + config.id;
    try {
      await this._afs.doc(doc).update({ ...config, ...this._timeStamp });
      await this._toaster.updateSuccess();
      return true;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  /** This will delete the value of config*/
  public async deleteSystemRoleConfiguration(id: string) {
    const doc = Db.Context.System.Role.Configuration + '/' + id;
    try {
      await this._afs.doc(doc).delete();
      await this._toaster.deleteSuccess();
      return true;
    } catch (error) {
      await this._toaster.deleteFail(error);
      console.error(error);
      return false;
    }
  }
}
