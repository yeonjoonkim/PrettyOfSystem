import { Injectable, inject } from '@angular/core';
import { MenuCategoryType, MenuContentType } from 'src/app/interface/menu/menu.interface';
import { lastValueFrom, map, Observable } from 'rxjs';
import * as Db from 'src/app/constant/firebase-path';
import { RoleAccessLevelType } from 'src/app/interface/system/role/role.interface';
import { RoleRateService } from 'src/app/service/authentication/role-rate/role-rate.service';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';
import { FirebaseApiService } from '../../firebase-api/firebase-api.service';

@Injectable({
  providedIn: 'root',
})
export class SystemMenuRepositoryService {
  private _api = inject(FirebaseApiService);

  constructor(
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
    return this._api.valueChangeDocuments<MenuCategoryType>(Db.Context.System.Menu.Category).pipe(
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
    return this._api.getDocuments<MenuCategoryType>(Db.Context.System.Menu.Category).pipe(
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
    let category = { ...newCategory };
    try {
      const saved = await this._api.set<MenuCategoryType>(Db.Context.System.Menu.Category, category);

      if (saved !== null) {
        await this._toaster.addSuccess();
      } else {
        await this._toaster.addFail('');
      }

      return saved !== null;
    } catch (error) {
      console.error(error);
      await this._toaster.addFail(error);
      return false;
    }
  }

  /**Based on systemMenuCat Id update */
  public async updateSystemMenuCategory(selectedSystemMenuCategory: MenuCategoryType) {
    try {
      const updated = await this._api.updateDocument(Db.Context.System.Menu.Category, selectedSystemMenuCategory);

      if (updated) {
        await this._toaster.updateSuccess();
      } else {
        await this._toaster.updateFail('');
      }

      return updated;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  public async deleteSystemMenuCategory(selectedSystemMenuCategoryId: string) {
    try {
      const deleted = await this._api.delete(Db.Context.System.Menu.Category, selectedSystemMenuCategoryId);
      if (deleted) {
        await this._toaster.deleteSuccess();
      } else {
        await this._toaster.deleteFail('');
      }

      return deleted;
    } catch (error) {
      await this._toaster.deleteFail(error);
      console.error(error);
      return false;
    }
  }
}
