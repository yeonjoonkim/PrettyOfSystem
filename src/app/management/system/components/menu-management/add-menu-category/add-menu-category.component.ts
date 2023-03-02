import { PopoverController, NavParams } from '@ionic/angular';
import { IMenuCategory } from 'src/app/interface/menu/menu.interface';
import { Component, OnInit } from '@angular/core';
import { SystemMenuCategoryService } from 'src/app/service/system/menu/category/system-menu-category.service';

@Component({
  selector: 'add-menu-category',
  templateUrl: './add-menu-category.component.html',
  styleUrls: ['./add-menu-category.component.scss'],
})

export class AddMenuCategoryComponent implements OnInit{
  public editMode: boolean = false;
  public category: IMenuCategory = {
    id: '',
    description: '',
    name: '',
    icon: '',
    content: []
  };

  /**This will retreive the category by using pop over action*/
  constructor(private systemMenuCategoryService: SystemMenuCategoryService, private popoverCtrl: PopoverController, private navParams: NavParams) {
    let selectedCategory = this.navParams.get('selectedCategory');
    if(selectedCategory){
      this.editMode = true;
      this.category = selectedCategory;
    }
  }

  ngOnInit() {
  }

  /**This event will validate and save into language package and will modify the category name to language transform object value */
  public async onClickSaveNewCategory(): Promise<void>{
    if(this.category.icon || this.category.description){
      await this.systemMenuCategoryService.processSaveNewSystemMenuCategory(this.category);
      await this.popoverCtrl.dismiss();
    }
  }
  
  /**This event will attempt to edit the value and pass to the component */
  public async onClickEditCategory(){
    if(this.category.icon && this.category.description){
      await this.popoverCtrl.dismiss({result: this.category});
    }
  }
}
