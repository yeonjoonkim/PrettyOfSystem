import { PopoverController } from '@ionic/angular';
import { IMenuCategory } from 'src/app/interface/menu/menu.interface.service';
import { Component, OnInit } from '@angular/core';
import { SystemMenuCategoryService } from 'src/app/service/system/menu/category/system-menu-category.service';

@Component({
  selector: 'add-menu-category',
  templateUrl: './add-menu-category.component.html',
  styleUrls: ['./add-menu-category.component.scss'],
})

export class AddMenuCategoryComponent implements OnInit{
  public category: IMenuCategory = {
    description: '',
    name: '',
    icon: '',
    content: []
  };

  constructor(private systemMenuCategoryService: SystemMenuCategoryService, private popoverCtrl: PopoverController) {
  }

  ngOnInit() {
  }

  /**This event will validate and save into language package and will modify the category name to language transform object value */
  public async onClickSaveNewCategory(): Promise<void>{
    await this.systemMenuCategoryService.processSaveNewSystemMenuCategory(this.category);
    await this.popoverCtrl.dismiss();
  }
}
