import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GlobalService } from './service/global/global.service';
import { NetworkConnectionStatusService } from './service/global/network-connection-status/network-connection-status.service';
import { ConnectionStatus } from '@capacitor/network';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from './service/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private _deviceTypeSubscription!: Subscription;
  private _internetConnectionSubscription!: Subscription;
  private _languageChangeActionSubscription!: Subscription;
  private _loginStatusSubscription!: Subscription;
  private _routerChangeSubscription!: Subscription;
  public isLoaded: boolean = false;
  public internetStatus!: ConnectionStatus;
  public isLogin: boolean = false;
  constructor(
    private _global: GlobalService,
    public networkStatus: NetworkConnectionStatusService,
    private _router: Router,
    private _user: UserService
  ) {}

  async ngOnInit() {
    await this._global.storage.create();
    this._user.activateAuthChangeListener();
    this.subscribeRouterChange();
    this.subscribeUserLoginStatus();
    this.subscribeNetworkStatus();
    this.subscribeDeviceWidth();
    this.subscribeLanguageChangeAction();
  }

  async ngOnDestroy() {
    this._deviceTypeSubscription?.unsubscribe();
    this._languageChangeActionSubscription?.unsubscribe();
    this._internetConnectionSubscription?.unsubscribe();
    this._routerChangeSubscription?.unsubscribe();
    this._loginStatusSubscription?.unsubscribe();
  }

  public isLoginPage() {
    return this._router.url === '/login';
  }

  private async subscribeUserLoginStatus() {
    this._loginStatusSubscription = this._user.isLoggedin$.subscribe(isLogin => {
      this.isLogin = isLogin;
    });
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
        await this.loadLanguage();
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

  private async loadLanguage() {
    let connected = await this._global.networkConnection.isConnected();
    await this._global.language.management.storage.setDefault(connected).then(async () => {
      this.isLoaded = true;
    });
  }
}
