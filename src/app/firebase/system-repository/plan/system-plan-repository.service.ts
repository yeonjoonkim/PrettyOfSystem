import { PlanConfigurationType } from 'src/app/interface/system/plan/plan.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import * as Db from 'src/app/constant/firebase-path';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';

@Injectable({
  providedIn: 'root',
})
export class SystemPlanRepositoryService {
  private readonly _timeStamp = { lastModifiedDate: new Date() };

  constructor(private _afs: AngularFirestore, private _toaster: FirebaseToasterService) {}

  /**This will return as Observalbe to receive the all Plan Options Available */
  public valueChangeListener(): Observable<PlanConfigurationType[]> {
    return this._afs
      .collection<PlanConfigurationType>(Db.Context.System.Plan.Option, ref => ref.orderBy('name'))
      .valueChanges()
      .pipe(
        map((planConfigs: PlanConfigurationType[]) => {
          if (!planConfigs || planConfigs.length === 0) {
            return [];
          }
          return planConfigs;
        })
      );
  }

  public getSystemPlanOptions(): Observable<PlanConfigurationType[]> {
    return this._afs
      .collection<PlanConfigurationType>(Db.Context.System.Plan.Option)
      .get()
      .pipe(
        map(snapshot => {
          return snapshot.docs.map(doc => {
            return doc.data();
          });
        })
      );
  }

  public getSelectedPlan(selectedId: string): Observable<PlanConfigurationType | undefined> {
    return this._afs
      .doc<PlanConfigurationType>(`${Db.Context.System.Plan.Option}/${selectedId}`)
      .get()
      .pipe(
        map(snapshot => {
          return snapshot.data();
        })
      );
  }

  /**This will add new system plan option */
  public async addSystemPlanOption(config: PlanConfigurationType) {
    let newId = this._afs.createId();
    config.id = newId;
    let newOption = { ...config, ...this._timeStamp };
    try {
      await this._afs.collection(Db.Context.System.Plan.Option).doc(newId).set(newOption);
      await this._toaster.addSuccess();
      return true;
    } catch (error) {
      await this._toaster.addFail(error);
      console.error(error);
      return false;
    }
  }

  /**This will updated selected plan */
  public async updateSystemPlanOption(config: PlanConfigurationType) {
    let newOption = { ...config, ...this._timeStamp };
    try {
      await this._afs.collection(Db.Context.System.Plan.Option).doc(config.id).set(newOption);
      await this._toaster.updateSuccess();
      return true;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  /**This will delete the selected plan */
  public async deleteSystemPlanOption(selectedId: string) {
    try {
      await this._afs.doc(Db.Context.System.Plan.Option + '/' + selectedId).delete();
      await this._toaster.deleteSuccess();
      return true;
    } catch (error) {
      await this._toaster.deleteFail(error);
      console.error(error);
      return false;
    }
  }
}
