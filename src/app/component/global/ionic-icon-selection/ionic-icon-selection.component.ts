import { IonicIconListComponent } from './ionic-icon-list/ionic-icon-list.component';
import { PopoverController } from '@ionic/angular';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'ionic-icon-selection',
  templateUrl: './ionic-icon-selection.component.html',
  styleUrls: ['./ionic-icon-selection.component.scss'],
})
export class IonicIconSelectionComponent implements OnInit {
  public isSearchOpen: boolean = false;
  public selectedIcon: string = '';
  public searchIcon: 'caret-up-outline' | 'caret-down-outline' = 'caret-down-outline';

  @ViewChild('popover') popover: any;
  @Output() iconChange = new EventEmitter<string>();
  @Input() iconType: 'outline' | 'sharp' | 'filled' | 'full' = 'outline';
  @Input() editMode: boolean = true;
  @Input()
  get icon(): string {
    return this.selectedIcon;
  }
  set icon(value: string) {
    this.selectedIcon = value;
    this.iconChange.emit(this.selectedIcon);
  }

  constructor(private popOverCtrl: PopoverController) {}

  ngOnInit() {}

  /** This will open the menu option */
  public async presentIconSelection(event: any): Promise<void> {
    if (!this.isSearchOpen) {
      this.isSearchOpen = true;
      let iconSelection = await this.createIconSelectionPopover(event);
      this.onChangeSearhOpen(true);
      await iconSelection.present();
      await this.handleIconSelection(iconSelection);
    }
  }

  /**This will generate the pop over controller */
  private async createIconSelectionPopover(event: any): Promise<HTMLIonPopoverElement> {
    return await this.popOverCtrl.create({
      component: IonicIconListComponent,
      event: event,
      translucent: true,
      componentProps: {
        iconType: this.iconType,
        icon: this.icon,
      },
    });
  }

  /**This will await the result from the Icon selection list component */
  private async handleIconSelection(iconSelection: HTMLIonPopoverElement): Promise<void> {
    let result = await iconSelection.onDidDismiss();
    let selectedIcon = result?.data?.selected;
    this.icon = selectedIcon !== undefined && selectedIcon !== null ? selectedIcon : this.icon;
    this.isSearchOpen = false;
    this.onChangeSearhOpen(false);
  }

  /** This will change the search icon based on the condition */
  private onChangeSearhOpen(searchIconAction: boolean) {
    this.searchIcon = searchIconAction ? 'caret-up-outline' : 'caret-down-outline';
  }
}
