import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'no-internet',
  templateUrl: './no-internet.page.html',
  styleUrls: ['./no-internet.page.scss'],
})
export class NoInternetPage implements OnInit {
  constructor(private _modalCtrl: ModalController, private _popoverCtrl: PopoverController) {}

  async ngOnInit() {
    await this.dismissModal();
    await this.dismissPopover();
  }

  private async dismissModal() {
    // Check if a modal is currently open before trying to dismiss it
    const modal = await this._modalCtrl.getTop();
    if (modal) {
      await this._modalCtrl.dismiss();
    }
  }
  private async dismissPopover() {
    const popover = await this._popoverCtrl.getTop();
    if (popover) {
      await this._popoverCtrl.dismiss();
    }
  }
}
