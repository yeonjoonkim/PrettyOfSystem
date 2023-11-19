import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { MenuContentType } from 'src/app/interface/menu/menu.interface';
import { SystemMenuCategoryService } from 'src/app/service/system/system-menu/system-menu-category/system-menu-category.service';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'add-menu-category-content',
  templateUrl: './add-menu-category-content.component.html',
  styleUrls: ['./add-menu-category-content.component.scss'],
})
export class AddMenuCategoryContentComponent implements OnInit {
  private _selectedSystemMenuCategoryId: string = '';
  private readonly _behaviourDismiss = {
    delete: 'delete',
    create: 'create',
    edit: 'edit',
  };
  public editMode: boolean = false;
  public categoryContent: MenuContentType = {
    name: '',
    description: '',
    url: '',
    icon: '',
  };

  /**This will retreive the parameter by using pop over*/
  constructor(
    private _systemMenuCategoryService: SystemMenuCategoryService,
    private _popoverCtrl: PopoverController,
    private _navParams: NavParams,
    private _global: GlobalService
  ) {
    this.getPopoverParameter();
  }

  ngOnInit() {}

  /**This will get the popover parms */
  private getPopoverParameter() {
    let paramMenuCategoryId = this._navParams.get('selectedMenuCategoryId');
    let selectedContent = this._navParams.get('selectedMenuContent');
    let paramEditMode = this._navParams.get('editMode');

    if (paramEditMode !== undefined) {
      if (paramEditMode) {
        this._selectedSystemMenuCategoryId = paramMenuCategoryId;
        this.categoryContent = selectedContent;
        this.editMode = paramEditMode;
      } else {
        this._selectedSystemMenuCategoryId = paramMenuCategoryId;
        this.editMode = paramEditMode;
      }
    }
  }

  /**This event is to validate then process the update system menu content */
  public async onClickSaveNewCategoryContent() {
    await this.validateInput();
    if (this.categoryContent.icon.length > 0 && this.categoryContent.description.length > 0) {
      await this._systemMenuCategoryService.processUpdateSystemMenuContent(
        this._selectedSystemMenuCategoryId,
        this.categoryContent
      );
      await this._popoverCtrl.dismiss({ data: this._behaviourDismiss.edit });
    }
  }

  /**This event will edit the category content */
  public async onClickEditCategoryContent() {
    await this.validateInput();
    if (this.categoryContent.icon.length > 0 && this.categoryContent.description.length > 0) {
      await this._systemMenuCategoryService.processUpdateSystemMenuContent(
        this._selectedSystemMenuCategoryId,
        this.categoryContent
      );
      await this._popoverCtrl.dismiss({ data: this._behaviourDismiss.edit });
    }
  }

  /**This will validate the input */
  public async validateInput() {
    let isIconError: boolean = this.categoryContent.icon.length === 0;
    let isDescriptionError: boolean = this.categoryContent.description.length === 0;

    if (isIconError) {
      let iconError: string = await this._global.language.transform('messageerror.description.invaildicon');
      await this._global.toast.presentError(iconError);
    }

    if (isDescriptionError) {
      let description: string = await this._global.language.transform('messageerror.description.descriptionfield');
      await this._global.toast.presentError(description);
    }
  }
}
