import { Injectable } from '@angular/core';
import { IMenuCategory, IMenuContent} from '../../../interface/menu/menu.interface.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { firstValueFrom, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemMenuRepositoryService {
  private readonly timeStamp = {lastModifiedDate: new Date()};
  private readonly systemMenu: string = 'system/menu/';
  private readonly category: string = this.systemMenu + 'category';
  //TODO
  private readonly categoryName: string = this.systemMenu + 'categoryName';
  private readonly systemMenuCategories!: Observable<IMenuCategory[]>;
  constructor(private afs: AngularFirestore) {
    this.systemMenuCategories = this.getSystemMenuCategories();
  }

  /** This will validate the category name in the db*/
  public async hasSameCategoryName(selectedCategoryName: string){
    let categories = await firstValueFrom(this.systemMenuCategories);
    let hasSameCategoryName = categories.filter(category => category.name === selectedCategoryName).length > 0;
    return hasSameCategoryName;
  }

  /**This will return the category */
  public getSystemMenuCategories(): Observable<IMenuCategory[]> {
    return this.afs.collection<IMenuCategory>(this.category)
      .valueChanges()
      .pipe(
        map(categories => categories.sort(this.compareByContentName)),
        map(categories => categories.map(cat => {
          cat.content.sort(this.compareByName);
          return cat;
        }))
      );
  }

  /**This will compare the name and return asc */
  private compareByName(a: IMenuContent, b: IMenuContent) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  /**This will compare the name and return asc */
  private compareByContentName(a: IMenuCategory, b: IMenuCategory) {
    if (a.content[0]?.name < b.content[0]?.name) {
      return -1;
    }
    if (a.content[0]?.name > b.content[0]?.name) {
      return 1;
    }
    return 0;
  }

  /**Save into db */
  public async addSystemMenuCategory(newCategory: IMenuCategory) {
    let newId = this.afs.createId();
    let category = {...newCategory, ...this.timeStamp, id: newId};
    try {
      await this.afs.collection(this.category).doc(newId).set(category);
    } catch (e) {
      console.error(e);
    }
  }
}
