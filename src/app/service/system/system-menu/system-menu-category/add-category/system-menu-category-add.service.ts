import { Injectable } from '@angular/core';
import { ILanguageTranslateItem } from 'src/app/interface/system/language/language.interface';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { MenuCategoryType, MenuContentType } from 'src/app/interface/menu/menu.interface';
import { GlobalService } from 'src/app/service/global/global.service';

@Injectable({
  providedIn: 'root',
})
export class SystemMenuCategoryAddService {
  public readonly _prefixedCategoryOjbectName: string = 'menucategory.title.';
  public readonly _prefixedCategoryContentObjectName: string = 'menucontent.title.';

  constructor(
    private _global: GlobalService,
    private _systemMenuRepository: SystemMenuRepositoryService
  ) {}

  /**This event will validate and save into language package and will modify the category name to language transform object value */
  public async processSaveNewSystemMenuCategory(newCategory: MenuCategoryType): Promise<void> {
    newCategory.name = this._global.textTransform.getTransformObjectKeyValue(
      this._prefixedCategoryOjbectName,
      newCategory.description
    );
    let vaildated = await this.validateCategory(newCategory);

    if (vaildated) {
      let translatedResult = await this.getTranslatedCategoryDescription(newCategory);
      await this.saveNewCategory(translatedResult, newCategory);
    }
  }

  /**This will validate the result and save into language package */
  private async saveNewCategory(result: ILanguageTranslateItem, newCategory: MenuCategoryType): Promise<void> {
    newCategory.name = this._global.textTransform.getTransformObjectKeyValue(
      this._prefixedCategoryOjbectName,
      newCategory.description
    );
    let success = await this._global.language.transform('messagesuccess.title.save');
    let hasSameCategoryName = await this._systemMenuRepository.hasSameCategoryName(newCategory.name);

    if (!hasSameCategoryName && !result.isEmpty) {
      const isadded = await this._systemMenuRepository.addSystemMenuCategory(newCategory);
      if (isadded) {
        await this._global.language.management.addPackage(result, newCategory.name.toLowerCase());
      }
    } else {
      let errorMsg = await this._global.language.transform('messageerror.title.unsaved');
      await this._global.toast.presentError(errorMsg);
    }
  }

  /**This will translate the description */
  public async getTranslatedCategoryDescription(newCategory: MenuCategoryType): Promise<ILanguageTranslateItem> {
    let translateCriteria = await this._global.language.management.translateCriteria.allLanguageTitleCriteria();
    let result: ILanguageTranslateItem = await this._global.languageTranslate.get(
      newCategory.description,
      translateCriteria,
      true
    );
    return result;
  }

  /**This will translate the description of content */
  public async getTranslatedContentDescription(newContent: MenuContentType): Promise<ILanguageTranslateItem> {
    let translateCriteria = await this._global.language.management.translateCriteria.allLanguageTitleCriteria();
    let result: ILanguageTranslateItem = await this._global.languageTranslate.get(
      newContent.description,
      translateCriteria,
      true
    );
    return result;
  }

  /** This will validaate cateogry to check the name, icon */
  private async validateCategory(newCategory: MenuCategoryType): Promise<boolean> {
    let hasDescription = newCategory.description.length > 0;
    let hasIcon = newCategory.icon.length > 0;
    let vaildated = hasDescription && hasIcon;

    if (!hasDescription) {
      let errorMsg = await this._global.language.transform('messageerror.title.descriptionfield');
      await this._global.toast.presentError(errorMsg);
    } else if (!hasIcon) {
      let errorMsg = await this._global.language.transform('messageerror.title.iconfield');
      await this._global.toast.presentError(errorMsg);
    }
    return vaildated;
  }
}
