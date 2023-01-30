import { MenuManagementComponent } from './../menu-management/menu-management.component';
import { ILanguageTranslateItem, ILanguageTranslateResult } from 'src/app/interface/system/language/language.interface';
import { LanguageTranslateService } from './../../../../../shared/services/language-translate/language-translate.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { LanguageService } from 'src/app/shared/services/language/language.service';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { IMenuCategory } from 'src/app/interface/menu/menu.interface.service';
import { TextTransformService } from 'src/app/shared/services/text-transform/text-transform.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.scss'],
})

export class MenuCategoryComponent implements OnInit{
  private readonly prefixedCategoryOjbectName: string = 'menu.category.';
  public isEdited: boolean = false;
  public category: IMenuCategory = {
    description: '',
    name: '',
    icon: '',
    content: []
  };

  constructor(private textTransform: TextTransformService, private systemMenuRepository: SystemMenuRepositoryService,
    private language: LanguageService, private toast: ToastService, private languageTranslate: LanguageTranslateService) {
  }

  ngOnInit() {
  }

  /**This event will validate and save into language package and will modify the category name to language transform object value */
  public async onClickSaveNewCategory(): Promise<void>{
    this.category.name = this.textTransform.getTransformObjectKeyValue(this.prefixedCategoryOjbectName, this.category.description);
    let vaildated = await this.validateCategory();
    if(vaildated){
      let translatedResult: ILanguageTranslateItem = await this.processTranslateCategoryDescription();
      await this.saveNewCategory(translatedResult)
    }
    else{
      let errorMsg = await this.language.transform('message.error.unsaved');
      await this.toast.presentError(errorMsg);
    }
  }


  //** This will return the translated result*/
  private async processTranslateCategoryDescription(): Promise<ILanguageTranslateItem>{
    let translatedResult = await this.getTranslatedCategoryDescription();
    this.category.description = this.language.getDefaultLanguageDescription(translatedResult.translated);
    this.category.name = this.textTransform.getTransformObjectKeyValue(this.prefixedCategoryOjbectName, this.category.description);

    return translatedResult;
  }

  /**This will validate the result and save into language package */
  private async saveNewCategory(result: ILanguageTranslateItem): Promise<void>{
    this.category.description = this.language.getDefaultLanguageDescription(result.translated);
    this.category.name = this.textTransform.getTransformObjectKeyValue(this.prefixedCategoryOjbectName, this.category.description);
    let success = await this.language.transform('message.success.save');
    let hasSameCategoryName = await this.systemMenuRepository.hasSameCategoryName(this.category.name);

    if(!hasSameCategoryName && !result.isEmpty){
      await this.language.editLanguagePackage(result, this.category.name.toLowerCase());
      await this.systemMenuRepository.addSystemMenuCategory(this.category);
      await this.toast.present(success);
    }
  }

  /**This will translate the description */
  private async getTranslatedCategoryDescription(): Promise<ILanguageTranslateItem>{
    let translateCriteria = await this.language.getAllLanguageTranslateCriteria();
    translateCriteria.isTitle = true;
    let result: ILanguageTranslateItem = await this.languageTranslate.getTranslatedLanguagePackage(this.category.description, translateCriteria);
    return result;
  }

  /** This will validaate cateogry to check the name, icon */
  private async validateCategory(): Promise<boolean>{
    let hasDescription = this.category.description.length > 0;
    let hasName = this.category.name.length > 0;
    let hasIcon = this.category.icon.length > 0;
    let vaildated = hasDescription && hasName && hasIcon;

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
