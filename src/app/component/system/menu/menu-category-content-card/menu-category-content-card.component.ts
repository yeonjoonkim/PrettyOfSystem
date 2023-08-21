import { AddMenuCategoryContentComponent } from '../add-menu-category-content/add-menu-category-content.component';
import { Component, Input, OnInit } from '@angular/core';
import { AlertController, AlertOptions, PopoverController } from '@ionic/angular';
import {IMenuContent} from '../../../../interface/menu/menu.interface';
import { LanguageService } from 'src/app/shared/services/global/language/language.service';
import { SystemMenuCategoryService } from 'src/app/service/system/system-menu/system-menu-category/system-menu-category.service';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';

@Component({
  selector: 'menu-category-content-card',
  templateUrl: './menu-category-content-card.component.html',
  styleUrls: ['./menu-category-content-card.component.scss'],
})
export class MenuCategoryContentCardComponent implements OnInit {
  public editMode: boolean = false;
  private isOpen: boolean = false;
  @Input() selectedMenuContents: IMenuContent[] = [];
  @Input() selectedMenuCategoryId: string | undefined = '';
  @Input() selectedCategoryName: string | undefined = '';

  constructor(private popoverCtrl: PopoverController, private alertCtrl: AlertController, private language: LanguageService, private systemMenuCategoryService: SystemMenuCategoryService,
    private systemMenuRepository: SystemMenuRepositoryService) {
      this.systemMenuRepository.getSystemMenuCategories().subscribe(category => {
        let selectedCat = category.filter(cat => cat.id === this.selectedMenuCategoryId);
        if(selectedCat.length === 1){
          let selected = selectedCat[0];
          this.selectedMenuContents = selected.content;
        }
      });
  }

  ngOnInit() {}

  /**Click event to add new content */
  public async onClickAddNewContent(event: any){
    if(!this.isOpen){
      this.editMode = false;
      let addCategoryContent = await this.getCategoryContentPopover(event);
      await addCategoryContent.present();
    }
  }

  /**Click event to disply the popover */
  public async onClickEditContent(event: any, content: IMenuContent){
    if(!this.isOpen){
      this.editMode = true;
      let addCategoryContent = await this.getEditCategoryContentPopover(event, content);
      await addCategoryContent.present();
    }
  }

  /** Click event to delete the content */
  public async onClickDeleteContent(content: IMenuContent){
    let confirmAlert = await this.setConfirmDeleteAlert(content.name);
    await confirmAlert.present();
    let action = await confirmAlert.onWillDismiss();

    if(action?.role === 'delete' && this.selectedMenuCategoryId !== undefined){
      await this.systemMenuCategoryService.processDeleteSystemMenuCategoryContent(this.selectedMenuCategoryId, content)
    }
  }

  /**Generate the add new popover action */
  private async getCategoryContentPopover(event: any){
    let content = await this.popoverCtrl.create({
      component: AddMenuCategoryContentComponent,
      event: event,
      translucent: true,
      cssClass: 'pop-over-container',
      componentProps: {
        selectedMenuCategoryId: this.selectedMenuCategoryId,
        editMode: this.editMode
      }});

      return content;
  }

  /**Generate the edit popover action */
  private async getEditCategoryContentPopover(event: any, selectedContent: IMenuContent){
    let content = await this.popoverCtrl.create({
      component: AddMenuCategoryContentComponent,
      event: event,
      translucent: true,
      componentProps: {
        selectedMenuContent: selectedContent,
        selectedMenuCategoryId: this.selectedMenuCategoryId,
        cssClass: 'pop-over-container',
        editMode: this.editMode
      }});

      return content;
  }

  /** Generate the delete confirmation */
  private async setConfirmDeleteAlert(selectedCategoryName: string){
    let categoryName = await this.language.transform(selectedCategoryName);
    let deleteMsg = await this.language.transform('message.header.delete');
    let header = categoryName + " - " + deleteMsg;
    let confirmDeleteAlertCriteria: AlertOptions = {
      header: header,
      buttons: [
        {
          text: await this.language.transform('button.name.delete'),
          role: 'delete',
        },
        {
        text: await this.language.transform('button.name.cancel'),
        role: '',}
    ]};

    let confirmDeleteAlert = await this.alertCtrl.create(confirmDeleteAlertCriteria);
    return confirmDeleteAlert;
  }

}
