import { AddMenuCategoryContentComponent } from '../add-menu-category-content/add-menu-category-content.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertController, AlertOptions, PopoverController } from '@ionic/angular';
import { MenuContentType } from 'src/app/interface/menu/menu.interface';
import { LanguageService } from 'src/app/service/global/language/language.service';
import { SystemMenuCategoryService } from 'src/app/service/system/system-menu/system-menu-category/system-menu-category.service';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';

@Component({
  selector: 'menu-category-content-card',
  templateUrl: './menu-category-content-card.component.html',
  styleUrls: ['./menu-category-content-card.component.scss'],
})
export class MenuCategoryContentCardComponent implements OnInit {
  @Output() onUpdate = new EventEmitter<boolean>();
  @Input() selectedMenuContents: MenuContentType[] = [];
  @Input() selectedMenuCategoryId: string | undefined = '';
  @Input() selectedCategoryName: string | undefined = '';

  public editMode: boolean = false;
  private _isOpen: boolean = false;
  constructor(
    private _popoverCtrl: PopoverController,
    private _alertCtrl: AlertController,
    private _language: LanguageService,
    private _systemMenuCategoryService: SystemMenuCategoryService,
    private _systemMenuRepository: SystemMenuRepositoryService
  ) {
    this._systemMenuRepository.getSystemMenuCategories().subscribe(category => {
      let selectedCat = category.filter(cat => cat.id === this.selectedMenuCategoryId);
      if (selectedCat.length === 1) {
        let selected = selectedCat[0];
        this.selectedMenuContents = selected.content;
      }
    });
  }

  ngOnInit() {}

  /**Click event to add new content */
  public async onClickAddNewContent(event: any) {
    if (!this._isOpen) {
      this._isOpen = true;
      this.editMode = false;
      let addCategoryContent = await this.getCategoryContentPopover(event);
      await addCategoryContent.present();

      let updateEvent = await addCategoryContent.onWillDismiss();
      this._isOpen = false;
      if (updateEvent.data) {
        this.onUpdate.emit(true);
      }
    }
  }

  /**Click event to disply the popover */
  public async onClickEditContent(event: any, content: MenuContentType) {
    if (!this._isOpen) {
      this._isOpen = true;
      this.editMode = true;
      let addCategoryContent = await this.getEditCategoryContentPopover(event, content);
      await addCategoryContent.present();

      let updateEvent = await addCategoryContent.onWillDismiss();
      this._isOpen = false;
      if (updateEvent.data) {
        this.onUpdate.emit(true);
      }
    }
  }

  /** Click event to delete the content */
  public async onClickDeleteContent(content: MenuContentType) {
    let confirmAlert = await this.setConfirmDeleteAlert(content.name);
    await confirmAlert.present();
    let action = await confirmAlert.onWillDismiss();

    if (action?.role === 'delete' && this.selectedMenuCategoryId !== undefined) {
      await this._systemMenuCategoryService.processDeleteSystemMenuCategoryContent(
        this.selectedMenuCategoryId,
        content
      );
      this.onUpdate.emit(true);
    }
  }

  /**Generate the add new popover action */
  private async getCategoryContentPopover(event: any) {
    let content = await this._popoverCtrl.create({
      component: AddMenuCategoryContentComponent,
      event: event,
      translucent: true,
      cssClass: 'dynamic-popover-container',
      componentProps: {
        selectedMenuCategoryId: this.selectedMenuCategoryId,
        editMode: this.editMode,
      },
    });

    return content;
  }

  /**Generate the edit popover action */
  private async getEditCategoryContentPopover(event: any, selectedContent: MenuContentType) {
    let content = await this._popoverCtrl.create({
      component: AddMenuCategoryContentComponent,
      event: event,
      translucent: true,
      componentProps: {
        selectedMenuContent: selectedContent,
        selectedMenuCategoryId: this.selectedMenuCategoryId,
        cssClass: 'dynamic-popover-container',
        editMode: this.editMode,
      },
    });

    return content;
  }

  /** Generate the delete confirmation */
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
