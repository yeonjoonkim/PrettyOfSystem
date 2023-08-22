import { SystemMenuCategoryService } from 'src/app/service/system/system-menu/system-menu-category/system-menu-category.service';
import { LanguageService } from 'src/app/service/global/language/language.service';
import { IMenuCategory } from 'src/app/interface/menu/menu.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertOptions, PopoverController, AlertController } from '@ionic/angular';
import { AddMenuCategoryComponent } from '../add-menu-category/add-menu-category.component';

@Component({
  selector: 'menu-category-card',
  templateUrl: './menu-category-card.component.html',
  styleUrls: ['./menu-category-card.component.scss'],
})
export class MenuCategoryCardComponent implements OnInit {
  @Output() onUpdate = new EventEmitter<boolean>();
  @Output() categoryChange = new EventEmitter<IMenuCategory>();
  @Input() menuCategories: IMenuCategory[] | null = [];
  @Input()
  get category(): IMenuCategory {
    return this.selectedCategory;
  }
  set category(value: IMenuCategory) {
    this.selectedCategory = value;
    this.categoryChange.emit(this.selectedCategory);
  }
  public selectedCategory: IMenuCategory = {
    description: '',
    name: '',
    icon: '',
    content: [],
    accessLevel: {
      isSystemAdmin: false,
      isAdmin: false,
      isManager: false,
      isEmployee: false,
      isReception: false,
    },
  };

  constructor(
    private popoverCtrl: PopoverController,
    private alertCtrl: AlertController,
    private language: LanguageService,
    private systemMenuCategoryService: SystemMenuCategoryService
  ) {}

  ngOnInit() {}

  /**This will present the add component as pop over */
  public async presentAddMenuCategory(event: any) {
    let addMenuCategory = await this.popoverCtrl.create({
      component: AddMenuCategoryComponent,
      event: event,
      translucent: true,
      cssClass: 'pop-over-container',
    });

    await addMenuCategory.present();
    let result = await addMenuCategory.onWillDismiss();
    if (result?.data) {
      this.onUpdate.emit(true);
    }
  }

  /**Click event to set the category */
  public onClickCategory(selectedCategory: IMenuCategory) {
    this.category = selectedCategory;
  }

  /**Click Event to remove the selected category */
  public async onClickDeleteCategory(selectedCategory: IMenuCategory) {
    let confirmAlert = await this.setConfirmDeleteAlert(selectedCategory.name);
    await confirmAlert.present();
    let action = await confirmAlert.onWillDismiss();

    if (action?.role === 'delete') {
      let selectedCategoryId = selectedCategory.id ? selectedCategory.id : '';
      this.category = {
        description: '',
        name: '',
        icon: '',
        content: [],
        accessLevel: {
          isSystemAdmin: false,
          isAdmin: false,
          isManager: false,
          isEmployee: false,
          isReception: false,
        },
      };
      await this.systemMenuCategoryService.processDeleteSystemMenuCategory(selectedCategoryId);
      this.onUpdate.emit(true);
    }
  }

  /**Click event to edit the selected category */
  public async onClickEditCategory(event: any, selectedCategory: IMenuCategory) {
    let addMenuCategory = await this.popoverCtrl.create({
      component: AddMenuCategoryComponent,
      event: event,
      translucent: true,
      cssClass: 'pop-over-container',
      componentProps: {
        selectedCategory: selectedCategory,
      },
    });

    await addMenuCategory.present();

    let action = await addMenuCategory.onWillDismiss();
    if (action.data?.result) {
      this.category = {
        description: '',
        name: '',
        icon: '',
        content: [],
        accessLevel: {
          isSystemAdmin: false,
          isAdmin: false,
          isManager: false,
          isEmployee: false,
          isReception: false,
        },
      };
      let result: IMenuCategory = action?.data?.result;
      await this.systemMenuCategoryService.processUpdateSystemMenuCategory(result);
      this.onUpdate.emit(true);
    }
  }

  /**This will create an alert to confirm the delete action */
  private async setConfirmDeleteAlert(selectedCategoryName: string) {
    let categoryName = await this.language.transform(selectedCategoryName);
    let deleteMsg = await this.language.transform('message.header.delete');
    let header = categoryName + ' - ' + deleteMsg;
    let confirmDeleteAlertCriteria: AlertOptions = {
      header: header,
      buttons: [
        {
          text: await this.language.transform('button.name.delete'),
          role: 'delete',
        },
        {
          text: await this.language.transform('button.name.cancel'),
          role: '',
        },
      ],
    };

    let confirmDeleteAlert = await this.alertCtrl.create(confirmDeleteAlertCriteria);
    return confirmDeleteAlert;
  }
}
