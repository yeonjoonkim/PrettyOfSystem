import { PlanConfigurationType } from 'src/app/interface/system/plan/plan.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import * as Db from 'src/app/constant/firebase-path';

@Injectable({
  providedIn: 'root',
})
export class SystemPlanRepositoryService {
  private readonly timeStamp = { lastModifiedDate: new Date() };

  constructor(private afs: AngularFirestore) {}

  /**This will return as Observalbe to receive the all Plan Options Available */
  public valueChangeListener(): Observable<PlanConfigurationType[]> {
    return this.afs
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
    return this.afs
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

  /**This will add new system plan option */
  public async addSystemPlanOption(config: PlanConfigurationType) {
    let isSave = true;
    let newId = this.afs.createId();
    config.id = newId;
    let newOption = { ...config, ...this.timeStamp };
    try {
      await this.afs.collection(Db.Context.System.Plan.Option).doc(newId).set(newOption);
    } catch (e) {
      console.error(e);
      isSave = false;
    }

    return isSave;
  }

  /**This will updated selected plan */
  public async updateSystemPlanOption(config: PlanConfigurationType) {
    let isUpdate = true;
    let newOption = { ...config, ...this.timeStamp };
    try {
      await this.afs.collection(Db.Context.System.Plan.Option).doc(config.id).set(newOption);
    } catch (e) {
      console.error(e);
      isUpdate = false;
    }

    return isUpdate;
  }

  /**This will delete the selected plan */
  public async deleteSystemPlanOption(selectedId: string) {
    let isDeleted = true;
    try {
      this.afs.doc(Db.Context.System.Plan.Option + '/' + selectedId).delete();
    } catch (e) {
      console.error(e);
      isDeleted = false;
    }

    return isDeleted;
  }

  public getSelectedPlan(selectedId: string): Observable<PlanConfigurationType | undefined> {
    return this.afs
      .doc<PlanConfigurationType>(`${Db.Context.System.Plan.Option}/${selectedId}`)
      .get()
      .pipe(
        map(snapshot => {
          return snapshot.data();
        })
      );
  }
}
