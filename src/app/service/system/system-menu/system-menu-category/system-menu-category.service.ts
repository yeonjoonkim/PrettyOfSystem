import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { MenuContentType } from 'src/app/interface/menu/menu.interface';
import { SystemMenuCategoryAddService } from './add-category/system-menu-category-add.service';
import { Injectable } from '@angular/core';
import { MenuCategoryType } from 'src/app/interface/menu/menu.interface';
import { GlobalService } from 'src/app/service/global/global.service';

@Injectable({
  providedIn: 'root',
})
export class SystemMenuCategoryService {
  constructor(
    private systemMenuCategoryAddService: SystemMenuCategoryAddService,
    private systemMenuRepo: SystemMenuRepositoryService,
    private global: GlobalService
  ) {}

  /**This will trggier the process of save the new category */
  public async processSaveNewSystemMenuCategory(newCategory: MenuCategoryType) {
    await this.systemMenuCategoryAddService.processSaveNewSystemMenuCategory(newCategory);
  }

  public async processDeleteSystemMenuCategory(selectedMenuCategoryId: string) {
    let systemMenuCategory = await this.systemMenuRepo.getSelectedSystemMenuCategory(
      selectedMenuCategoryId
    );

    if (systemMenuCategory) {
      let selectedCategoryLanguageKeyList = [systemMenuCategory?.name].concat(
        systemMenuCategory?.content.map(content => content.name) !== undefined
          ? systemMenuCategory?.content.map(content => content.name)
          : []
      );
      await this.global.language.management
        .deletePackages(selectedCategoryLanguageKeyList)
        .then(() => {
          this.systemMenuRepo.deleteSystemMenuCategory(selectedMenuCategoryId);
        });
    }
  }

  public async processUpdateSystemMenuCategory(edited: MenuCategoryType) {
    let selectedId: string = edited?.id ? edited?.id : '';
    let previous = await this.systemMenuRepo.getSelectedSystemMenuCategory(selectedId);
    let needLanguageTranslate: boolean = edited.description !== previous?.description;

    if (previous && edited.icon && edited.description) {
      if (needLanguageTranslate) {
        let result = await this.systemMenuCategoryAddService.getTranslatedCategoryDescription(
          edited
        );

        if (!result.isEmpty) {
          let success = await this.global.language.transform('messagesuccess.title.save');
          edited.description = this.global.textTransform.getDefaultLanguageTranslateResult(
            result.translated
          );
          edited.name = this.global.textTransform.getTransformObjectKeyValue(
            this.systemMenuCategoryAddService.prefixedCategoryOjbectName,
            edited.description
          );
          await this.global.language.management.deletePackage(previous.name).then(async () => {
            await this.global.language.management.addPackage(result, edited.name.toLowerCase());
            await this.global.toast.present(success);
          });
        }
      }

      this.systemMenuRepo.updateSystemMenuCategory(edited);
    }
  }

  public async processDeleteSystemMenuCategoryContent(
    selectedSystemMenuCategoryId: string,
    selectedSystemMenuCategoryContent: MenuContentType
  ) {
    let selectedSystemMenuCategory = await this.systemMenuRepo.getSelectedSystemMenuCategory(
      selectedSystemMenuCategoryId
    );

    if (selectedSystemMenuCategory) {
      let success = await this.global.language.transform('messagesuccess.title.delete');
      selectedSystemMenuCategory.content = selectedSystemMenuCategory?.content.filter(
        content => content?.name !== selectedSystemMenuCategoryContent?.name
      );
      await this.global.language.management.deletePackage(selectedSystemMenuCategoryContent.name);
      await this.processUpdateSystemMenuCategory(selectedSystemMenuCategory);
      await this.global.toast.present(success);
    }
  }

  public async processUpdateSystemMenuContent(
    selectedSystemMenuCategoryId: string,
    newSystemMenuCategoryContent: MenuContentType
  ) {
    let selectedId: string = selectedSystemMenuCategoryId ? selectedSystemMenuCategoryId : '';
    let selectedSystemMenuCategory = await this.systemMenuRepo.getSelectedSystemMenuCategory(
      selectedId
    );
    let hasSelectedMenuCategory = selectedSystemMenuCategory !== undefined;

    if (hasSelectedMenuCategory && selectedSystemMenuCategory) {
      let findSameContent =
        selectedSystemMenuCategory?.content.filter(
          content => content?.name === newSystemMenuCategoryContent?.name
        ).length > 0;
      let update = findSameContent && hasSelectedMenuCategory;
      let add = !findSameContent && hasSelectedMenuCategory;

      if (update) {
        let selectedContent = selectedSystemMenuCategory.content.filter(
          content => content.name === newSystemMenuCategoryContent.name
        )[0];
        await this.updateSystemMenuContent(
          selectedContent,
          newSystemMenuCategoryContent,
          selectedSystemMenuCategory
        );
      }

      if (add) {
        await this.addNewSystemMenuContent(
          newSystemMenuCategoryContent,
          selectedSystemMenuCategory
        );
      }
    }
  }

  private async addNewSystemMenuContent(
    newCategoryContent: MenuContentType,
    systemMenuCategory: MenuCategoryType
  ) {
    let result = await this.systemMenuCategoryAddService.getTranslatedContentDescription(
      newCategoryContent
    );

    if (!result.isEmpty) {
      newCategoryContent.description = this.global.textTransform.getDefaultLanguageTranslateResult(
        result.translated
      );
      newCategoryContent.name = this.global.textTransform.getTransformObjectKeyValue(
        this.systemMenuCategoryAddService.prefixedCategoryContentObjectName,
        newCategoryContent.description.toLowerCase()
      );

      await this.global.language.management.addPackage(
        result,
        newCategoryContent.name.toLowerCase()
      );
      systemMenuCategory.content.push(newCategoryContent);
      this.systemMenuRepo.updateSystemMenuCategory(systemMenuCategory);
      let success = await this.global.language.transform('messagesuccess.title.save');
      await this.global.toast.present(success);
    }
  }

  private async updateSystemMenuContent(
    previousContent: MenuContentType,
    newContent: MenuContentType,
    systemMenuCategory: MenuCategoryType
  ) {
    systemMenuCategory.content = systemMenuCategory.content.filter(
      content => content.name !== previousContent.name
    );
    let needTranslate = previousContent.description !== newContent.description;

    if (needTranslate) {
      let result = await this.systemMenuCategoryAddService.getTranslatedContentDescription(
        newContent
      );
      if (!result.isEmpty) {
        newContent.description = this.global.textTransform.getDefaultLanguageTranslateResult(
          result.translated
        );
        newContent.name = this.global.textTransform.getTransformObjectKeyValue(
          this.systemMenuCategoryAddService.prefixedCategoryContentObjectName,
          newContent.description.toLowerCase()
        );
        await this.global.language.management.deletePackage(previousContent.name).then(async () => {
          await this.global.language.management.addPackage(result, newContent.name.toLowerCase());
          systemMenuCategory.content.push(newContent);
          this.systemMenuRepo.updateSystemMenuCategory(systemMenuCategory);
          let success = await this.global.language.transform('messagesuccess.title.edit');
          await this.global.toast.present(success);
        });
      }
    } else {
      systemMenuCategory.content.push(newContent);
      this.systemMenuRepo.updateSystemMenuCategory(systemMenuCategory);
      let success = await this.global.language.transform('messagesuccess.title.edit');
      await this.global.toast.present(success);
    }
  }
}
