import { Injectable } from '@angular/core';
import {
  ILanguageTranslateItem,
  ILanguageTranslateResult,
} from 'src/app/interface/system/language/language.interface';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { IMenuCategory, IMenuContent } from 'src/app/interface/menu/menu.interface';
import { GlobalService } from 'src/app/service/global/global.service';

@Injectable({
  providedIn: 'root',
})
export class SystemMenuCategoryAddService {
  public readonly prefixedCategoryOjbectName: string = 'menucategory.title.';
  public readonly prefixedCategoryContentObjectName: string = 'menucontent.title.';

  constructor(
    private global: GlobalService,
    private systemMenuRepository: SystemMenuRepositoryService
  ) {}

  /**This event will validate and save into language package and will modify the category name to language transform object value */
  public async processSaveNewSystemMenuCategory(newCategory: IMenuCategory): Promise<void> {
    newCategory.name = this.global.textTransform.getTransformObjectKeyValue(
      this.prefixedCategoryOjbectName,
      newCategory.description
    );
    let vaildated = await this.validateCategory(newCategory);

    if (vaildated) {
      let translatedResult = await this.getTranslatedCategoryDescription(newCategory);
      await this.saveNewCategory(translatedResult, newCategory);
    }
  }

  /**This will validate the result and save into language package */
  private async saveNewCategory(
    result: ILanguageTranslateItem,
    newCategory: IMenuCategory
  ): Promise<void> {
    newCategory.name = this.global.textTransform.getTransformObjectKeyValue(
      this.prefixedCategoryOjbectName,
      newCategory.description
    );
    let success = await this.global.language.transform('messagesuccess.title.save');
    let hasSameCategoryName = await this.systemMenuRepository.hasSameCategoryName(newCategory.name);

    if (!hasSameCategoryName && !result.isEmpty) {
      await this.global.language.management.addPackage(result, newCategory.name.toLowerCase());
      await this.systemMenuRepository.addSystemMenuCategory(newCategory);
      await this.global.toast.present(success);
    } else {
      let errorMsg = await this.global.language.transform('messageerror.title.unsaved');
      await this.global.toast.presentError(errorMsg);
    }
  }

  /**This will translate the description */
  public async getTranslatedCategoryDescription(
    newCategory: IMenuCategory
  ): Promise<ILanguageTranslateItem> {
    let translateCriteria =
      await this.global.language.management.translateCriteria.allLanguageTitleCriteria();
    let result: ILanguageTranslateItem = await this.global.languageTranslate.get(
      newCategory.description,
      translateCriteria,
      true
    );
    return result;
  }

  /**This will translate the description of content */
  public async getTranslatedContentDescription(
    newContent: IMenuContent
  ): Promise<ILanguageTranslateItem> {
    let translateCriteria =
      await this.global.language.management.translateCriteria.allLanguageTitleCriteria();
    let result: ILanguageTranslateItem = await this.global.languageTranslate.get(
      newContent.description,
      translateCriteria,
      true
    );
    return result;
  }

  /** This will validaate cateogry to check the name, icon */
  private async validateCategory(newCategory: IMenuCategory): Promise<boolean> {
    let hasDescription = newCategory.description.length > 0;
    let hasIcon = newCategory.icon.length > 0;
    let vaildated = hasDescription && hasIcon;

    if (!hasDescription) {
      let errorMsg = await this.global.language.transform('messageerror.title.descriptionfield');
      await this.global.toast.presentError(errorMsg);
    } else if (!hasIcon) {
      let errorMsg = await this.global.language.transform('messageerror.title.iconfield');
      await this.global.toast.presentError(errorMsg);
    }
    return vaildated;
  }
}
