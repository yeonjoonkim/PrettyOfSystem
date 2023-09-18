import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalService } from './service/global/global.service';
import { NetworkConnectionStatusService } from './service/global/network-connection-status/network-connection-status.service';
import { ConnectionStatus } from '@capacitor/network';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private _deviceTypeSubscription!: Subscription;
  private _internetConnectionSubscription!: Subscription;
  private _languageChangeActionSubscription!: Subscription;
  private _routerChangeSubscription!: Subscription;
  public isLoaded: boolean = false;
  public internetStatus!: ConnectionStatus;

  constructor(
    private _global: GlobalService,
    public networkStatus: NetworkConnectionStatusService,
    private _router: Router
  ) {}

  async ngOnInit() {
    await this._global.storage.create();
    this.subscribeNetworkStatus();
    this.subscribeDeviceWidth();
    this.subscribeLanguageChangeAction();
    this.subscribeRouterChange();
    await this.loading();
  }

  async ngOnDestroy() {
    this._deviceTypeSubscription?.unsubscribe();
    this._languageChangeActionSubscription?.unsubscribe();
    this._internetConnectionSubscription?.unsubscribe();
    this._routerChangeSubscription?.unsubscribe();
  }

  public isLoginPage() {
    return this._router.url === '/login';
  }

  private async subscribeLanguageChangeAction() {
    this._languageChangeActionSubscription = this._global.language.changeLanguageAction.subscribe(
      async () => {
        this.ngOnDestroy();
        window.location.reload();
      }
    );
  }

  private subscribeRouterChange() {
    this._routerChangeSubscription = this._router.events.subscribe(async change => {
      if (change instanceof NavigationEnd) {
        const connection = await this._global.networkConnection.getStatus();
        await this._global.networkConnection.handleStatus(connection);
      }
    });
  }

  private subscribeNetworkStatus() {
    this._internetConnectionSubscription = this._global.networkConnection
      .activateListener()
      .subscribe(async status => {
        this.internetStatus = status;
        await this._global.networkConnection.handleStatus(status);
      });
  }

  private async subscribeDeviceWidth() {
    this._deviceTypeSubscription = this._global.deviceWidth.deviceTypeObservable.subscribe(
      device => {
        this._global.deviceWidth.deviceType = device;
      }
    );
  }

  private async loading() {
    let connected = await this._global.networkConnection.isConnected();
    if (connected) {
      await this._global.language.management.storage.setDefault().then(async () => {
        await this._global.language.setCurrentLanguage();
        this.isLoaded = true;
      });
    } else {
      this.isLoaded = true;
    }
  }
}
