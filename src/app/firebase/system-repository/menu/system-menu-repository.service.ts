import { Injectable } from '@angular/core';
import { IMenuCategory, IMenuContent} from '../../../interface/menu/menu.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { firstValueFrom, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemMenuRepositoryService {
  private readonly timeStamp = {lastModifiedDate: new Date()};
  private readonly systemMenu: string = 'system/menu/';
  private readonly category: string = this.systemMenu + 'category';
  private readonly systemMenuCategories: Observable<IMenuCategory[]> = this.getSystemMenuCategories();
  constructor(private afs: AngularFirestore) {
  }

  /** This will validate the category name in the db*/
  public async hasSameCategoryName(selectedCategoryName: string){
    let categories = await firstValueFrom(this.systemMenuCategories);
    let hasSameCategoryName = categories.filter(category => category.name === selectedCategoryName).length > 0;
    return hasSameCategoryName;
  }

  public async getSelectedSystemMenuCategory(selectedMenuCategoryId: string){
    const categories = await firstValueFrom(this.getSystemMenuCategories());
    return categories.find(cat => cat.id === selectedMenuCategoryId);
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

  /**Based on Id delete the document */
  public deleteSystemMenuCategory(selectedSystemMenuCategoryId: string){
    this.afs.doc(this.category + '/' + selectedSystemMenuCategoryId).delete();
  }

  /**Based on systemMenuCat Id update */
  public updateSystemMenuCategory(selectedSystemMenuCategory: IMenuCategory){
    this.afs.doc(this.category+'/'+ selectedSystemMenuCategory.id).update(selectedSystemMenuCategory);
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
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
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
