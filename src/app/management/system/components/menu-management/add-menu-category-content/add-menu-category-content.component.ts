import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { LanguageService } from 'src/app/shared/services/language/language.service';
import { Component, Input, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { IMenuContent } from 'src/app/interface/menu/menu.interface';
import { SystemMenuCategoryService } from 'src/app/service/system/menu/category/system-menu-category.service';

@Component({
  selector: 'add-menu-category-content',
  templateUrl: './add-menu-category-content.component.html',
  styleUrls: ['./add-menu-category-content.component.scss'],
})
export class AddMenuCategoryContentComponent implements OnInit {
  private selectedSystemMenuCategoryId: string = '';
  public editMode: boolean = false;
  public categoryContent: IMenuContent = {
    name: '',
    description: '',
    url: '',
    icon: '',
  };

  /**This will retreive the parameter by using pop over*/
  constructor(private systemMenuCategoryService: SystemMenuCategoryService, private popoverCtrl: PopoverController, private navParams: NavParams,
    private language: LanguageService, private toast: ToastService) {
      this.getPopoverParameter();
  }

  ngOnInit() {}

  /**This will get the popover parms */
  private getPopoverParameter(){
    let paramMenuCategoryId = this.navParams.get('selectedMenuCategoryId');
    let selectedContent = this.navParams.get('selectedMenuContent');
    let paramEditMode = this.navParams.get('editMode');

    if(paramEditMode !== undefined){
      if(paramEditMode){
        this.selectedSystemMenuCategoryId = paramMenuCategoryId;
        this.categoryContent = selectedContent;
        this.editMode = paramEditMode;
      }else{
        this.selectedSystemMenuCategoryId = paramMenuCategoryId;
        this.editMode = paramEditMode;
      }
    }
  }

  /**This event is to validate then process the update system menu content */
  public async onClickSaveNewCategoryContent(){
    await this.validateInput();
    if(this.categoryContent.icon.length > 0 && this.categoryContent.description.length > 0){
      await this.systemMenuCategoryService.processUpdateSystemMenuContent(this.selectedSystemMenuCategoryId, this.categoryContent);
      await this.popoverCtrl.dismiss();
    }
  }

  /**This event will edit the category content */
  public async onClickEditCategoryContent(){
    await this.validateInput();
    if(this.categoryContent.icon.length > 0 && this.categoryContent.description.length > 0){
      await this.systemMenuCategoryService.processUpdateSystemMenuContent(this.selectedSystemMenuCategoryId, this.categoryContent);
      await this.popoverCtrl.dismiss();
    }
  }

  /**This will validate the input */
  public async validateInput(){
    let isIconError: boolean = this.categoryContent.icon.length === 0;
    let isDescriptionError: boolean = this.categoryContent.description.length === 0;

    if(isIconError){
      let iconError: string = await this.language.transform('message.error.invaildicon');
      await this.toast.presentError(iconError);
    }

    if(isDescriptionError){
      let description: string = await this.language.transform('message.error.descriptionfield');
      await this.toast.presentError(description);
    }
  }
}
