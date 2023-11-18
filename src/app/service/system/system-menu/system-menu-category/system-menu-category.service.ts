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
    private _systemMenuCategoryAddService: SystemMenuCategoryAddService,
    private _systemMenuRepo: SystemMenuRepositoryService,
    private _global: GlobalService
  ) {}

  /**This will trggier the process of save the new category */
  public async processSaveNewSystemMenuCategory(newCategory: MenuCategoryType) {
    await this._systemMenuCategoryAddService.processSaveNewSystemMenuCategory(newCategory);
  }

  public async processDeleteSystemMenuCategory(selectedMenuCategoryId: string) {
    let systemMenuCategory = await this._systemMenuRepo.getSelectedSystemMenuCategory(selectedMenuCategoryId);

    if (systemMenuCategory) {
      let selectedCategoryLanguageKeyList = [systemMenuCategory?.name].concat(
        systemMenuCategory?.content.map(content => content.name) !== undefined
          ? systemMenuCategory?.content.map(content => content.name)
          : []
      );
      await this._global.language.management.deletePackages(selectedCategoryLanguageKeyList).then(isSuccess => {
        if (isSuccess) {
          this._systemMenuRepo.deleteSystemMenuCategory(selectedMenuCategoryId);
        }
      });
    }
  }

  public async processUpdateSystemMenuCategory(edited: MenuCategoryType) {
    let selectedId: string = edited?.id ? edited?.id : '';
    let previous = await this._systemMenuRepo.getSelectedSystemMenuCategory(selectedId);
    let needLanguageTranslate: boolean = edited.description !== previous?.description;

    if (previous && edited.icon && edited.description) {
      if (needLanguageTranslate) {
        let result = await this._systemMenuCategoryAddService.getTranslatedCategoryDescription(edited);

        if (!result.isEmpty) {
          edited.description = this._global.textTransform.getDefaultLanguageTranslateResult(result.translated);
          edited.name = this._global.textTransform.getTransformObjectKeyValue(
            this._systemMenuCategoryAddService._prefixedCategoryOjbectName,
            edited.description
          );
          await this._global.language.management.deletePackage(previous.name).then(async isSuccess => {
            if (isSuccess) {
              await this._global.language.management.addPackage(result, edited.name.toLowerCase());
            }
          });
        }
      }

      this._systemMenuRepo.updateSystemMenuCategory(edited);
    }
  }

  public async processDeleteSystemMenuCategoryContent(
    selectedSystemMenuCategoryId: string,
    selectedSystemMenuCategoryContent: MenuContentType
  ) {
    let selectedSystemMenuCategory =
      await this._systemMenuRepo.getSelectedSystemMenuCategory(selectedSystemMenuCategoryId);

    if (selectedSystemMenuCategory) {
      selectedSystemMenuCategory.content = selectedSystemMenuCategory?.content.filter(
        content => content?.name !== selectedSystemMenuCategoryContent?.name
      );

      const isDeleted = await this._global.language.management.deletePackage(
        selectedSystemMenuCategoryContent.name
      );

      if (isDeleted) {
        await this.processUpdateSystemMenuCategory(selectedSystemMenuCategory);
      }
    }
  }

  public async processUpdateSystemMenuContent(
    selectedSystemMenuCategoryId: string,
    newSystemMenuCategoryContent: MenuContentType
  ) {
    let selectedId: string = selectedSystemMenuCategoryId ? selectedSystemMenuCategoryId : '';
    let selectedSystemMenuCategory = await this._systemMenuRepo.getSelectedSystemMenuCategory(selectedId);
    let hasSelectedMenuCategory = selectedSystemMenuCategory !== undefined;

    if (hasSelectedMenuCategory && selectedSystemMenuCategory) {
      let findSameContent =
        selectedSystemMenuCategory?.content.filter(content => content?.name === newSystemMenuCategoryContent?.name)
          .length > 0;
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
        await this.addNewSystemMenuContent(newSystemMenuCategoryContent, selectedSystemMenuCategory);
      }
    }
  }

  private async addNewSystemMenuContent(
    newCategoryContent: MenuContentType,
    systemMenuCategory: MenuCategoryType
  ) {
    let result = await this._systemMenuCategoryAddService.getTranslatedContentDescription(newCategoryContent);

    if (!result.isEmpty) {
      newCategoryContent.description = this._global.textTransform.getDefaultLanguageTranslateResult(
        result.translated
      );
      newCategoryContent.name = this._global.textTransform.getTransformObjectKeyValue(
        this._systemMenuCategoryAddService._prefixedCategoryContentObjectName,
        newCategoryContent.description.toLowerCase()
      );

      const addedPackaged = await this._global.language.management.addPackage(
        result,
        newCategoryContent.name.toLowerCase()
      );
      if (addedPackaged) {
        systemMenuCategory.content.push(newCategoryContent);
        await this._systemMenuRepo.updateSystemMenuCategory(systemMenuCategory);
      }
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
      let result = await this._systemMenuCategoryAddService.getTranslatedContentDescription(newContent);
      if (!result.isEmpty) {
        newContent.description = this._global.textTransform.getDefaultLanguageTranslateResult(result.translated);
        newContent.name = this._global.textTransform.getTransformObjectKeyValue(
          this._systemMenuCategoryAddService._prefixedCategoryContentObjectName,
          newContent.description.toLowerCase()
        );
        await this._global.language.management.deletePackage(previousContent.name).then(async isSuccess => {
          if (isSuccess) {
            await this._global.language.management.addPackage(result, newContent.name.toLowerCase());
            systemMenuCategory.content.push(newContent);
            await this._systemMenuRepo.updateSystemMenuCategory(systemMenuCategory);
          }
        });
      }
    } else {
      systemMenuCategory.content.push(newContent);
      await this._systemMenuRepo.updateSystemMenuCategory(systemMenuCategory);
    }
  }
}
