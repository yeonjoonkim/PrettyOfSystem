import { Injectable } from '@angular/core';
import { ILanguageTranslateItem, ILanguageTranslateResult } from 'src/app/interface/system/language/language.interface';
import { LanguageTranslateService } from '../../../../../shared/services/language-translate/language-translate.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { LanguageService } from 'src/app/shared/services/language/language.service';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { IMenuCategory, IMenuContent } from 'src/app/interface/menu/menu.interface';
import { TextTransformService } from 'src/app/shared/services/text-transform/text-transform.service';


@Injectable({
  providedIn: 'root'
})
export class SystemMenuCategoryAddService {
  public readonly prefixedCategoryOjbectName: string = 'menu.category.';
  public readonly prefixedCategoryContentObjectName: string = 'menu.content.';

  constructor(private textTransform: TextTransformService, private systemMenuRepository: SystemMenuRepositoryService,
    private language: LanguageService, private toast: ToastService, private languageTranslate: LanguageTranslateService) {
  }

  /**This event will validate and save into language package and will modify the category name to language transform object value */
  public async processSaveNewSystemMenuCategory(newCategory: IMenuCategory): Promise<void>{
    newCategory.name = this.textTransform.getTransformObjectKeyValue(this.prefixedCategoryOjbectName, newCategory.description);
    let vaildated = await this.validateCategory(newCategory);

    if(vaildated){
      let translatedResult = await this.getTranslatedCategoryDescription(newCategory);
      await this.saveNewCategory(translatedResult, newCategory);
    }
  }

  /**This will validate the result and save into language package */
  private async saveNewCategory(result: ILanguageTranslateItem, newCategory: IMenuCategory): Promise<void>{
    newCategory.description = this.language.getDefaultLanguageDescription(result.translated);
    newCategory.name = this.textTransform.getTransformObjectKeyValue(this.prefixedCategoryOjbectName, newCategory.description);
    let success = await this.language.transform('message.success.save');
    let hasSameCategoryName = await this.systemMenuRepository.hasSameCategoryName(newCategory.name);

    if(!hasSameCategoryName && !result.isEmpty){
      await this.language.editLanguagePackage(result, newCategory.name.toLowerCase());
      await this.systemMenuRepository.addSystemMenuCategory(newCategory);
      await this.toast.present(success);
    }
    else{
      let errorMsg = await this.language.transform('message.error.unsaved');
      await this.toast.presentError(errorMsg);
    }
  }


  /**This will translate the description */
  public async getTranslatedCategoryDescription(newCategory: IMenuCategory): Promise<ILanguageTranslateItem>{
    let translateCriteria = await this.language.getAllLanguageTranslateCriteria();
    translateCriteria.isTitle = true;
    let result: ILanguageTranslateItem = await this.languageTranslate.getTranslatedLanguagePackage(newCategory.description, translateCriteria);
    return result;
  }
  /**This will translate the description of content */
  public async getTranslatedContentDescription(newContent: IMenuContent): Promise<ILanguageTranslateItem>{
    let translateCriteria = await this.language.getAllLanguageTranslateCriteria();
    translateCriteria.isTitle = true;
    let result: ILanguageTranslateItem = await this.languageTranslate.getTranslatedLanguagePackage(newContent.description, translateCriteria);
    return result;
  }


  /** This will validaate cateogry to check the name, icon */
  private async validateCategory(newCategory: IMenuCategory): Promise<boolean>{
    let hasDescription = newCategory.description.length > 0;
    let hasIcon = newCategory.icon.length > 0;
    let vaildated = hasDescription && hasIcon;

    if(!hasDescription){
      let errorMsg = await this.language.transform('message.error.descriptionfield');
      await this.toast.presentError(errorMsg);
    }else if(!hasIcon){
      let errorMsg = await this.language.transform('message.error.iconfield');
      await this.toast.presentError(errorMsg);
    }
    return vaildated;
  }

}
