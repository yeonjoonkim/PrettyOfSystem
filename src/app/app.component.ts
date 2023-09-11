import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalService } from './service/global/global.service';
import { NetworkConnectionStatusService } from './service/global/network-connection-status/network-connection-status.service';
import { ConnectionStatus } from '@capacitor/network';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private deviceTypeSubscription!: Subscription;
  private internetConnectionSubscription!: Subscription;
  private languageChangeActionSubscription!: Subscription;
  public isLoaded: boolean = false;
  public internetStatus!: ConnectionStatus;

  constructor(
    private global: GlobalService,
    public networkStatus: NetworkConnectionStatusService
  ) {}

  async ngOnInit() {
    await this.global.storage.create();
    this.subscribeNetworkStatus();
    this.subscribeDeviceWidth();
    this.subscribeLanguageChangeAction();
    await this.loading();
  }

  async ngOnDestroy() {
    this.deviceTypeSubscription?.unsubscribe();
    this.languageChangeActionSubscription?.unsubscribe();
    this.internetConnectionSubscription?.unsubscribe();
  }

  private async subscribeLanguageChangeAction() {
    this.languageChangeActionSubscription = this.global.language.changeLanguageAction.subscribe(
      async () => {
        this.ngOnDestroy();
        window.location.reload();
      }
    );
  }

  private subscribeNetworkStatus() {
    this.internetConnectionSubscription = this.global.networkConnection
      .activateListener()
      .subscribe(async status => {
        this.internetStatus = status;
        await this.global.networkConnection.handleStatus(status);
      });
  }

  private async subscribeDeviceWidth() {
    this.deviceTypeSubscription = this.global.deviceWidth.deviceTypeObservable.subscribe(device => {
      this.global.deviceWidth.deviceType = device;
    });
  }

  private async loading() {
    if (this.internetStatus.connected) {
      await this.global.language.management.storage.setDefault().then(async () => {
        await this.global.language.setCurrentLanguage();
        this.isLoaded = true;
      });
    } else {
      this.isLoaded = true;
    }
  }
}
