import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ModalController, PopoverController } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { NetworkConnectionStatusService } from 'src/app/service/global/network-connection-status/network-connection-status.service';

@Component({
  selector: 'no-internet',
  templateUrl: './no-internet.page.html',
  styleUrls: ['./no-internet.page.scss'],
})
export class NoInternetPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  constructor(
    private _modalCtrl: ModalController,
    private _popoverCtrl: PopoverController,
    private _loadingCtrl: LoadingController,
    private _menuCtrl: MenuController,
    private _nextworkStatus: NetworkConnectionStatusService,
    private _router: Router
  ) {}

  ngOnInit() {}
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  ionViewWillLeave() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  async ionViewWillEnter() {
    await this.dismissModal();
    await this.dismissPopover();
    await this.dismissLoading();
    await this.dissmissMenu();
    this._nextworkStatus
      .activateListener()
      .pipe(takeUntil(this._destroy$))
      .subscribe(async connection => {
        if (connection.connected) {
          await this._router.navigateByUrl('/booking');
        }
      });
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

  private async dismissLoading() {
    const loading = await this._loadingCtrl.getTop();
    if (loading) {
      await this._loadingCtrl.dismiss();
    }
  }

  private async dissmissMenu() {
    const menu = await this._menuCtrl.isOpen();
    if (menu) {
      await this._menuCtrl.close();
    }
  }
}
