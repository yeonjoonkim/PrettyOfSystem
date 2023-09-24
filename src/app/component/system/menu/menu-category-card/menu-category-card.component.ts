import { SystemMenuCategoryService } from 'src/app/service/system/system-menu/system-menu-category/system-menu-category.service';
import { LanguageService } from 'src/app/service/global/language/language.service';
import { MenuCategoryType } from 'src/app/interface/menu/menu.interface';
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
  @Output() categoryChange = new EventEmitter<MenuCategoryType>();
  @Input() menuCategories: MenuCategoryType[] | null = [];
  @Input()
  get category(): MenuCategoryType {
    return this.selectedCategory;
  }
  set category(value: MenuCategoryType) {
    this.selectedCategory = value;
    this.categoryChange.emit(this.selectedCategory);
  }
  public selectedCategory: MenuCategoryType = {
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
  private _popOverOpen: boolean = false;

  constructor(
    private _popoverCtrl: PopoverController,
    private _alertCtrl: AlertController,
    private _language: LanguageService,
    private _systemMenuCategoryService: SystemMenuCategoryService
  ) {}

  ngOnInit() {}

  /**This will present the add component as pop over */
  public async presentAddMenuCategory(event: any) {
    if (!this._popOverOpen) {
      this._popOverOpen = true;
      let addMenuCategory = await this._popoverCtrl.create({
        component: AddMenuCategoryComponent,
        event: event,
        translucent: true,
        cssClass: 'pop-over-container',
      });

      await addMenuCategory.present();
      let result = await addMenuCategory.onWillDismiss();
      this._popOverOpen = false;
      if (result?.data) {
        this.onUpdate.emit(true);
      }
    }
  }

  /**Click event to set the category */
  public onClickCategory(selectedCategory: MenuCategoryType) {
    this.category = selectedCategory;
  }

  /**Click Event to remove the selected category */
  public async onClickDeleteCategory(selectedCategory: MenuCategoryType) {
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
      await this._systemMenuCategoryService.processDeleteSystemMenuCategory(selectedCategoryId);
      this.onUpdate.emit(true);
    }
  }

  /**Click event to edit the selected category */
  public async onClickEditCategory(event: any, selectedCategory: MenuCategoryType) {
    if (!this._popOverOpen) {
      let addMenuCategory = await this._popoverCtrl.create({
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
      this._popOverOpen = false;
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
        let result: MenuCategoryType = action?.data?.result;
        await this._systemMenuCategoryService.processUpdateSystemMenuCategory(result);
        this.onUpdate.emit(true);
      }
    }
  }

  /**This will create an alert to confirm the delete action */
  private async setConfirmDeleteAlert(selectedCategoryName: string) {
    let categoryName = await this._language.transform(selectedCategoryName);
    let deleteMsg = await this._language.transform('label.title.deleteheader');
    let header = categoryName + ' - ' + deleteMsg;
    let confirmDeleteAlertCriteria: AlertOptions = {
      header: header,
      buttons: [
        {
          text: await this._language.transform('button.title.delete'),
          role: 'delete',
        },
        {
          text: await this._language.transform('button.title.cancel'),
          role: '',
        },
      ],
    };

    let confirmDeleteAlert = await this._alertCtrl.create(confirmDeleteAlertCriteria);
    return confirmDeleteAlert;
  }
}
