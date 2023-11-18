import { Component } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { IIonicIcon, IonicIconService } from '../ionic-icon/ionic-icon.service';

@Component({
  selector: 'ionic-icon-list',
  templateUrl: './ionic-icon-list.component.html',
  styleUrls: ['./ionic-icon-list.component.scss'],
})
export class IonicIconListComponent {
  private _iconType: 'outline' | 'sharp' | 'filled' | 'full' = 'outline';
  public icon: string = '';
  public query: string = '';
  public ionicIconSelection: IIonicIcon[] = [];

  constructor(
    private _ionicIcon: IonicIconService,
    private _navParams: NavParams,
    private _popOverCtrl: PopoverController
  ) {
    this._iconType = this._navParams.get('iconType');
    this.icon = this._navParams.get('icon');
    this.ionicIconSelection = this._ionicIcon.setIcon(this._iconType);
    this.onChangeSelection(this.icon);
  }

  public async dismissIconPopOver(newSelectedIcon: string) {
    await this._popOverCtrl.dismiss({ selected: newSelectedIcon });
  }

  private onChangeSelection(newSelectedIcon: string) {
    let selectedIcon = this.ionicIconSelection.find(icon => icon.name === newSelectedIcon);
    this.ionicIconSelection.filter(icon => icon !== selectedIcon).forEach(icon => (icon.selected = false));
    this.ionicIconSelection.filter(icon => icon === selectedIcon).forEach(icon => (icon.selected = true));
    this.icon = newSelectedIcon;
  }
}
