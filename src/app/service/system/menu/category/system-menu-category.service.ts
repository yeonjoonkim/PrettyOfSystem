import { SystemMenuCategoryAddService } from './add/system-menu-category-add.service';
import { Injectable } from '@angular/core';
import { IMenuCategory } from 'src/app/interface/menu/menu.interface.service';

@Injectable({
  providedIn: 'root'
})
export class SystemMenuCategoryService {
  constructor(private systemMenuCategoryAddService: SystemMenuCategoryAddService) { }


  /**This will trggier the process of save the new category */
  public async processSaveNewSystemMenuCategory(newCategory: IMenuCategory){
    await this.systemMenuCategoryAddService.processSaveNewSystemMenuCategory(newCategory);
  }
}
