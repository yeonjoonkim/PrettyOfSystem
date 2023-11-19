import { Injectable } from '@angular/core';
import { MenuCategoryType, MenuContentType } from 'src/app/interface/menu/menu.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, lastValueFrom, map, Observable } from 'rxjs';
import * as Db from 'src/app/constant/firebase-path';
import { RoleAccessLevelType } from 'src/app/interface/system/role/role.interface';
import { RoleRateService } from 'src/app/service/authentication/role-rate/role-rate.service';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';

@Injectable({
  providedIn: 'root',
})
export class SystemMenuRepositoryService {
  private readonly _timeStamp = { lastModifiedDate: new Date() };

  constructor(
    private _afs: AngularFirestore,
    private _roleRate: RoleRateService,
    private _toaster: FirebaseToasterService
  ) {}

  public async hasSameCategoryName(selectedCategoryName: string) {
    let categories = await lastValueFrom(this.getSystemMenuCategories());
    let hasSameCategoryName = categories.filter(category => category.name === selectedCategoryName).length > 0;
    return hasSameCategoryName;
  }

  public async getSelectedSystemMenuCategory(selectedMenuCategoryId: string) {
    const categories = await lastValueFrom(this.getSystemMenuCategories());
    return categories.find(cat => cat.id === selectedMenuCategoryId);
  }

  public valueChangeListener(): Observable<MenuCategoryType[]> {
    return this._afs
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
    return from(this._afs.collection<MenuCategoryType>(Db.Context.System.Menu.Category).get()).pipe(
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

  public subscribeAccessGrantedMenu(accessLevel: RoleAccessLevelType): Observable<MenuCategoryType[]> {
    return this.valueChangeListener().pipe(
      map(menu => {
        return menu.filter(category => {
          let categoryAccessLevel: number = this._roleRate.getSystemRoleRateSettingByConfiguration(
            category.accessLevel
          );
          let rate: number = this._roleRate.getSystemRoleRateSettingByConfiguration(accessLevel);
          let isCategoryAccessGranted = rate >= categoryAccessLevel;

          return isCategoryAccessGranted;
        });
      })
    );
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
    let newId = this._afs.createId();
    let category = { ...newCategory, ...this._timeStamp, id: newId };
    try {
      await this._afs.collection(Db.Context.System.Menu.Category).doc(newId).set(category);
      await this._toaster.addSuccess();
      return true;
    } catch (error) {
      console.error(error);
      await this._toaster.addFail(error);
      return false;
    }
  }

  /**Based on systemMenuCat Id update */
  public async updateSystemMenuCategory(selectedSystemMenuCategory: MenuCategoryType) {
    const doc = Db.Context.System.Menu.Category + '/' + selectedSystemMenuCategory.id;
    try {
      await this._afs.doc(doc).update(selectedSystemMenuCategory);
      await this._toaster.updateSuccess();
      return true;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  public async deleteSystemMenuCategory(selectedSystemMenuCategoryId: string) {
    const doc = Db.Context.System.Menu.Category + '/' + selectedSystemMenuCategoryId;
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
