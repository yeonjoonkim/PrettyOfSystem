import { PopoverController, NavParams } from '@ionic/angular';
import { IMenuCategory } from 'src/app/interface/menu/menu.interface';
import { Component, OnInit } from '@angular/core';
import { SystemMenuCategoryService } from 'src/app/service/system/system-menu/system-menu-category/system-menu-category.service';

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
    content: [],
    accessLevel: {
      isSystemAdmin: false,
      isAdmin: false,
      isManager: false,
      isEmployee: false,
      isReception: false
    },
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
    if(this.category.icon && this.category.description, this.hasAccessLevel()){
      await this.systemMenuCategoryService.processSaveNewSystemMenuCategory(this.category);
      await this.popoverCtrl.dismiss();
    }
  }

  private hasAccessLevel(): boolean{
    return this.category.accessLevel.isSystemAdmin  || this.category.accessLevel.isAdmin || this.category.accessLevel.isManager || this.category.accessLevel.isEmployee || this.category.accessLevel.isReception;
  }

  /**This event will attempt to edit the value and pass to the component */
  public async onClickEditCategory(){
    if(this.category.icon && this.category.description){
      await this.popoverCtrl.dismiss({result: this.category});
    }
  }


  /** When the system admin toggle is changed, modify the Configuration */
  public onChangeSystemAdminAccessCtrl(newAccessCtrl: boolean): void{
    if(newAccessCtrl){
      this.category.accessLevel.isSystemAdmin = true;
      this.category.accessLevel.isAdmin = false;
      this.category.accessLevel.isManager = false;
      this.category.accessLevel.isEmployee = false;
      this.category.accessLevel.isReception = false;
    }
  }


  /** When the admin toggle is changed, modify the Configuration */
  public onChangeAdminAccessCtrl(newAccessCtrl: boolean): void{
    if(newAccessCtrl){
      this.category.accessLevel.isSystemAdmin = false;
      this.category.accessLevel.isAdmin = true;
      this.category.accessLevel.isManager = false;
      this.category.accessLevel.isEmployee = false;
      this.category.accessLevel.isReception = false;
    }
  }


  /** When the manager toggle is changed, modify the Configuration */
  public onChangeManagerAccessCtrl(newAccessCtrl: boolean){
    if(newAccessCtrl){
      this.category.accessLevel.isSystemAdmin = false;
      this.category.accessLevel.isAdmin = false;
      this.category.accessLevel.isManager = true;
      this.category.accessLevel.isEmployee = false;
      this.category.accessLevel.isReception = false;
    }
  }


  /** When the reception toggle is changed, modify the Configuration */
  public onChangeReceptionAccessCtrl(newAccessCtrl: boolean): void{
    if(newAccessCtrl){
      this.category.accessLevel.isSystemAdmin = false;
      this.category.accessLevel.isAdmin = false;
      this.category.accessLevel.isManager = false;
      this.category.accessLevel.isEmployee = false;
      this.category.accessLevel.isReception = true;
    }
  }


  /** When the employee toggle is changed, modify the Configuration */
  public onChangeEmployeeAccessCtrl(newAccessCtrl: boolean): void{
    if(newAccessCtrl){
      this.category.accessLevel.isSystemAdmin = false;
      this.category.accessLevel.isAdmin = false;
      this.category.accessLevel.isManager = false;
      this.category.accessLevel.isEmployee = true;
      this.category.accessLevel.isReception = false;
    }
  }

}
