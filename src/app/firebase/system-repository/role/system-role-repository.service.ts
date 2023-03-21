import { IRoleConfiguration } from 'src/app/interface/system/role/role.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { firstValueFrom, map, Observable } from 'rxjs';
import { IMenuCategory, IMenuContent } from 'src/app/interface/menu/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class SystemRoleRepositoryService {
  private readonly timeStamp = {lastModifiedDate: new Date()};
  private readonly systemRole: string = 'system/role/';
  private readonly roleConfig: string = this.systemRole + 'configuration';
  constructor(private afs: AngularFirestore) {
  }


  public getSystemRoleConfigurations(): Observable<IRoleConfiguration[]> {
    return this.afs.collection<IRoleConfiguration>(this.roleConfig, ref => ref.orderBy('rate'))
      .valueChanges()
      .pipe(
        map(roleConfigs => roleConfigs.map(rc => {
          return rc;
        }))
      );
  }

  public async addSystemRoleConfiguration(newConfig: IRoleConfiguration){
    let newId= this.afs.createId();
    newConfig.id = newId;
    try{
      await this.afs.collection(this.roleConfig).doc(newConfig.id).set({...newConfig, ...this.timeStamp});
    }
    catch(e){
      console.error(e);
    }
  }

  public async getSelectedSystemRole(selectedId: string){
    let roles = await firstValueFrom(this.getSystemRoleConfigurations());
    return roles.find(role => role.id === selectedId);
  }

  public async updateSystemRoleConfiguration(config: IRoleConfiguration){
    await this.afs.doc(this.roleConfig + '/' + config.id).update({...config, ...this.timeStamp})
  }

  public async deleteSystemRoleConfiguration(id: string){
    await this.afs.doc(this.roleConfig +'/'+ id).delete();
  }

}
