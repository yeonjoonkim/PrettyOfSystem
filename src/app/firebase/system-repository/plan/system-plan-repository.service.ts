import { IPlanConfiguration } from 'src/app/interface/system/plan/plan.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemPlanRepositoryService {
  private readonly timeStamp = {lastModifiedDate: new Date()};
  private readonly systemPlan: string = 'system/plan/';
  private readonly systemPlanOption: string = this.systemPlan + 'option';

  constructor(private afs: AngularFirestore) { }

  public getSystemPlanOptions(): Observable<IPlanConfiguration[]> {
    return this.afs.collection<IPlanConfiguration>(this.systemPlanOption,  ref => ref.orderBy('name'))
    .valueChanges()
    .pipe(
      map((planConfigs: IPlanConfiguration[]) => {
        // Transform the data here as needed
        return planConfigs;
      })
    )
  }

  public async editUpdatePlanOption(config: IPlanConfiguration){

    
  }

  public async addSystemPlanOption(config: IPlanConfiguration) {
    let isSave = true;
    let newId = this.afs.createId();
    config.id = newId;
    let newOption = {...config, ...this.timeStamp};
    try {
      await this.afs.collection(this.systemPlanOption).doc(newId).set(newOption);
    } catch (e) {
      console.error(e);
      isSave = false;
    }

    return isSave;
  }


}
