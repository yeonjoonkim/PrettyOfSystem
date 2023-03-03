import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { TextTransformService } from './../../../../shared/services/text-transform/text-transform.service';
import { LanguageService } from './../../../../shared/services/language/language.service';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { IMenuContent } from 'src/app/interface/menu/menu.interface';
import { SystemMenuCategoryAddService } from './add-category/system-menu-category-add.service';
import { Injectable } from '@angular/core';
import { IMenuCategory } from 'src/app/interface/menu/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class SystemMenuCategoryService {
  constructor(private systemMenuCategoryAddService: SystemMenuCategoryAddService,
    private systemMenuRepo: SystemMenuRepositoryService,
    private language: LanguageService,
    private textTransform: TextTransformService,
    private toast: ToastService) { }


  /**This will trggier the process of save the new category */
  public async processSaveNewSystemMenuCategory(newCategory: IMenuCategory){
    await this.systemMenuCategoryAddService.processSaveNewSystemMenuCategory(newCategory);
  }

  public async processDeleteSystemMenuCategory(selectedMenuCategoryId: string){
    let systemMenuCategory = await this.systemMenuRepo.getSelectedSystemMenuCategory(selectedMenuCategoryId);

    if(systemMenuCategory){
      let selectedCategoryLanguageKeyList = [systemMenuCategory?.name].concat(
        systemMenuCategory?.content.map(content => content.name) !== undefined ? systemMenuCategory?.content.map(content => content.name) : []
      );
      await this.language.deleteKeyPairValueList(selectedCategoryLanguageKeyList);
      this.systemMenuRepo.deleteSystemMenuCategory(selectedMenuCategoryId);
    }
  }

  public async processUpdateSystemMenuCategory(edited: IMenuCategory){
      let selectedId: string = edited?.id ? edited?.id : '';
      let previous = await this.systemMenuRepo.getSelectedSystemMenuCategory(selectedId);
      let needLanguageTranslate: boolean = edited.description !== previous?.description;

      if(previous && edited.icon && edited.description){
        if(needLanguageTranslate){
          let result = await this.systemMenuCategoryAddService.getTranslatedCategoryDescription(edited);

          if(!result.isEmpty){
            let success = await this.language.transform('message.success.save');
            edited.description = this.language.getDefaultLanguageDescription(result.translated);
            edited.name = this.textTransform.getTransformObjectKeyValue(this.systemMenuCategoryAddService.prefixedCategoryOjbectName, edited.description);
            await this.language.editLanguagePackage(result, edited.name.toLowerCase());
            await this.toast.present(success);
            await this.language.deleteKeyPairValue(previous.name);
          }
        }

        this.systemMenuRepo.updateSystemMenuCategory(edited);
      }
  }

  public async processDeleteSystemMenuCategoryContent(selectedSystemMenuCategoryId: string, selectedSystemMenuCategoryContent: IMenuContent){
    let selectedSystemMenuCategory = await this.systemMenuRepo.getSelectedSystemMenuCategory(selectedSystemMenuCategoryId);

    if(selectedSystemMenuCategory){
      selectedSystemMenuCategory.content = selectedSystemMenuCategory?.content.filter(content => content?.name !== selectedSystemMenuCategoryContent?.name);
      await this.processUpdateSystemMenuCategory(selectedSystemMenuCategory);
    }
  }

  public async processUpdateSystemMenuContent(selectedSystemMenuCategoryId: string, newSystemMenuCategoryContent: IMenuContent){
    let selectedId: string = selectedSystemMenuCategoryId ? selectedSystemMenuCategoryId : '';
    let selectedSystemMenuCategory = await this.systemMenuRepo.getSelectedSystemMenuCategory(selectedId);
    let hasSelectedMenuCategory = selectedSystemMenuCategory !== undefined;

    if(hasSelectedMenuCategory && selectedSystemMenuCategory){
      let findSameContent = selectedSystemMenuCategory?.content.filter(content => content?.name === newSystemMenuCategoryContent?.name).length > 0;
      let update = findSameContent && hasSelectedMenuCategory;
      let add = !findSameContent && hasSelectedMenuCategory;

      if(update){
       let selectedContent = selectedSystemMenuCategory.content.filter(content => content.name === newSystemMenuCategoryContent.name)[0];
       await this.updateSystemMenuContent(selectedContent, newSystemMenuCategoryContent, selectedSystemMenuCategory);
      }

      if(add){
        await this.addNewSystemMenuContent(newSystemMenuCategoryContent, selectedSystemMenuCategory)
      }
    }
  }

  private async addNewSystemMenuContent(newCategoryContent: IMenuContent, systemMenuCategory: IMenuCategory){
    let result = await this.systemMenuCategoryAddService.getTranslatedContentDescription(newCategoryContent);

    if(!result.isEmpty){
      newCategoryContent.description = this.language.getDefaultLanguageDescription(result.translated);
      newCategoryContent.name = this.textTransform.getTransformObjectKeyValue(this.systemMenuCategoryAddService.prefixedCategoryContentObjectName, newCategoryContent.description.toLowerCase());
      await this.language.editLanguagePackage(result, newCategoryContent.name.toLowerCase());
      systemMenuCategory.content.push(newCategoryContent);
      this.systemMenuRepo.updateSystemMenuCategory(systemMenuCategory);
      let success = await this.language.transform('message.success.save');
      await this.toast.present(success);
    }
  }

  private async updateSystemMenuContent(previousContent: IMenuContent, newContent: IMenuContent, systemMenuCategory: IMenuCategory){
    systemMenuCategory.content =  systemMenuCategory.content.filter(content => content.name !== previousContent.name);
    let needTranslate = previousContent.description !== newContent.description;

    if(needTranslate){
      let result = await this.systemMenuCategoryAddService.getTranslatedContentDescription(newContent);
      if(!result.isEmpty){
        newContent.description = this.language.getDefaultLanguageDescription(result.translated);
        newContent.name = this.textTransform.getTransformObjectKeyValue(this.systemMenuCategoryAddService.prefixedCategoryContentObjectName, newContent.description.toLowerCase());
        await this.language.editLanguagePackage(result, newContent.name.toLowerCase());
        systemMenuCategory.content.push(newContent);
        this.systemMenuRepo.updateSystemMenuCategory(systemMenuCategory);
        await this.language.deleteKeyPairValue(previousContent.name);
        let success = await this.language.transform('message.success.edit');
        await this.toast.present(success);
      }
    }else{
      systemMenuCategory.content.push(newContent);
      this.systemMenuRepo.updateSystemMenuCategory(systemMenuCategory);
      let success = await this.language.transform('message.success.edit');
      await this.toast.present(success);
    }
  }
}
