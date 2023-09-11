import { Injectable } from '@angular/core';
import { MenuCategoryType, MenuContentType } from 'src/app/interface/menu/menu.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { firstValueFrom, from, lastValueFrom, map, Observable } from 'rxjs';
import * as Db from 'src/app/constant/firebase-path';
import { RoleAccessLevelType } from 'src/app/interface/system/role/role.interface';
import { RoleRateService } from 'src/app/service/authentication/role-rate/role-rate.service';

@Injectable({
  providedIn: 'root',
})
export class SystemMenuRepositoryService {
  private readonly timeStamp = { lastModifiedDate: new Date() };

  constructor(private afs: AngularFirestore, private roleRate: RoleRateService) {}

  /** This will validate the category name in the db*/
  public async hasSameCategoryName(selectedCategoryName: string) {
    let categories = await lastValueFrom(this.getSystemMenuCategories());
    let hasSameCategoryName =
      categories.filter(category => category.name === selectedCategoryName).length > 0;
    return hasSameCategoryName;
  }

  public async getSelectedSystemMenuCategory(selectedMenuCategoryId: string) {
    const categories = await lastValueFrom(this.getSystemMenuCategories());
    return categories.find(cat => cat.id === selectedMenuCategoryId);
  }

  /**This will return the category */
  public valueChangeListener(): Observable<MenuCategoryType[]> {
    return this.afs
      .collection<MenuCategoryType>(Db.Context.System.Menu.Category)
      .valueChanges()
      .pipe(
        map(categories => categories.sort(this.compareByContentName)),
        map(categories =>
          categories.map(cat => {
            cat.content.sort(this.compareByName);
            return cat;
          })
        )
      );
  }

  public getSystemMenuCategories(): Observable<MenuCategoryType[]> {
    return from(this.afs.collection<MenuCategoryType>(Db.Context.System.Menu.Category).get()).pipe(
      map(querySnapshot => querySnapshot.docs.map(doc => doc.data() as MenuCategoryType)),
      map(categories => categories.sort(this.compareByContentName)),
      map(categories =>
        categories.map(cat => {
          cat.content.sort(this.compareByName);
          return cat;
        })
      )
    );
  }

  public subscribeAccessGrantedMenu(
    accessLevel: RoleAccessLevelType
  ): Observable<MenuCategoryType[]> {
    // Replace 'CategoryType' with whatever type you use for 'category'
    return this.getSystemMenuCategories().pipe(
      map(menu => {
        return menu.filter(category => {
          let categoryAccessLevel: number = this.roleRate.getSystemRoleRateSettingByConfiguration(
            category.accessLevel
          );
          let rate: number = this.roleRate.getSystemRoleRateSettingByConfiguration(accessLevel);
          let isCategoryAccessGranted = rate >= categoryAccessLevel;
          return isCategoryAccessGranted;
        });
      })
    );
  }

  public async getAccessGrantedMenu(accessLevel: RoleAccessLevelType): Promise<MenuCategoryType[]> {
    return await firstValueFrom(this.subscribeAccessGrantedMenu(accessLevel));
  }

  /**Based on Id delete the document */
  public deleteSystemMenuCategory(selectedSystemMenuCategoryId: string) {
    this.afs.doc(Db.Context.System.Menu.Category + '/' + selectedSystemMenuCategoryId).delete();
  }

  /**Based on systemMenuCat Id update */
  public updateSystemMenuCategory(selectedSystemMenuCategory: MenuCategoryType) {
    this.afs
      .doc(Db.Context.System.Menu.Category + '/' + selectedSystemMenuCategory.id)
      .update(selectedSystemMenuCategory);
  }

  /**This will compare the name and return asc */
  private compareByName(a: MenuContentType, b: MenuContentType) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  /**This will compare the name and return asc */
  private compareByContentName(a: MenuCategoryType, b: MenuCategoryType) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  /**Save into db */
  public async addSystemMenuCategory(newCategory: MenuCategoryType) {
    let newId = this.afs.createId();
    let category = { ...newCategory, ...this.timeStamp, id: newId };
    try {
      await this.afs.collection(Db.Context.System.Menu.Category).doc(newId).set(category);
    } catch (e) {
      console.error(e);
    }
  }
}
