import { IRoleConfiguration } from 'src/app/interface/system/role/role.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { lastValueFrom, map, Observable } from 'rxjs';
import * as Db from './../../../shared/services/global/constant/firebase-path'; 

@Injectable({
  providedIn: 'root'
})
export class SystemRoleRepositoryService {
  private readonly timeStamp = {lastModifiedDate: new Date()};
  
  constructor(private afs: AngularFirestore) {
  }

  /** This will return as Observalble of all role configs  */
  public getSystemRoleConfigurations(): Observable<IRoleConfiguration[]> {
    return this.afs.collection<IRoleConfiguration>(Db.Context.System.Role.Configuration, ref => ref.orderBy('rate'))
      .get()
      .pipe(
        map(snapshot => {
          return snapshot.docs.map(doc => {
            return doc.data();
          });
        })
      );
  }

  public valueChangeListener(): Observable<IRoleConfiguration[]> {
    return this.afs.collection<IRoleConfiguration>(Db.Context.System.Role.Configuration, ref => ref.orderBy('rate'))
      .valueChanges()
      .pipe(
        map(roleConfigs => roleConfigs.map(rc => {
          return rc;
        }))
      );
  }

  /** This will add new System Role */
  public async addSystemRoleConfiguration(newConfig: IRoleConfiguration){
    let newId= this.afs.createId();
    newConfig.id = newId;
    try{
      await this.afs.collection(Db.Context.System.Role.Configuration).doc(newConfig.id).set({...newConfig, ...this.timeStamp});
    }
    catch(e){
      console.error(e);
    }
  }

  /** This will get only selectedId */
  public async getSelectedSystemRole(selectedId: string){
    let roles = await lastValueFrom(this.getSystemRoleConfigurations());
    return roles.find(role => role.id === selectedId);
  }

  /** This will update the value of config */
  public async updateSystemRoleConfiguration(config: IRoleConfiguration){
    await this.afs.doc(Db.Context.System.Role.Configuration + '/' + config.id).update({...config, ...this.timeStamp})
  }

  /** This will delete the value of config*/
  public async deleteSystemRoleConfiguration(id: string){
    await this.afs.doc(Db.Context.System.Role.Configuration +'/'+ id).delete();
  }

}
