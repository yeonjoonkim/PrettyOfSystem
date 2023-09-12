import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-no-internet',
  templateUrl: './no-internet.page.html',
  styleUrls: ['./no-internet.page.scss'],
})
export class NoInternetPage implements OnInit {
  constructor(private modalCtrl: ModalController, private popoverCtrl: PopoverController) {}

  async ngOnInit() {
    await this.dismissModal();
    await this.dismissPopover();
  }

  private async dismissModal() {
    // Check if a modal is currently open before trying to dismiss it
    const modal = await this.modalCtrl.getTop();
    if (modal) {
      await this.modalCtrl.dismiss();
    }
  }
  private async dismissPopover() {
    const popover = await this.popoverCtrl.getTop();
    if (popover) {
      await this.popoverCtrl.dismiss();
    }
  }
}
