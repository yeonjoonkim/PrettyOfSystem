import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
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
  private _onDestroy$ = new Subject<void>();
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
    this.routerChangeListener();
    this.deviceWidthListener();
    this.languageChangeListener();
    this.userLoginStatusListener();
    this.networkStatusListener();
  }

  async ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  public isLoginPage() {
    return this._router.url === '/login';
  }

  private async userLoginStatusListener() {
    this._user.isLoggedin$.pipe(takeUntil(this._onDestroy$)).subscribe(isLogin => {
      this.isLogin = isLogin;
    });
    this._user.claim$.pipe(takeUntil(this._onDestroy$)).subscribe(s => {
      console.log(s);
    });
  }

  private routerChangeListener() {
    this._router.events.pipe(takeUntil(this._onDestroy$)).subscribe(async change => {
      if (change instanceof NavigationEnd) {
        const connection = await this._global.networkConnection.getStatus();
        await this._global.networkConnection.handleStatus(connection);
        await this.loadLanguage();
      }
    });
  }

  private async languageChangeListener() {
    this._global.language.changeLanguageAction
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(async () => {
        this.ngOnDestroy();
        window.location.reload();
      });
  }

  private networkStatusListener() {
    this._global.networkConnection
      .activateListener()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(async status => {
        this.internetStatus = status;
        await this._global.networkConnection.handleStatus(status);
      });
  }

  private async deviceWidthListener() {
    this._global.deviceWidth.deviceTypeObservable
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(device => {
        this._global.deviceWidth.deviceType = device;
      });
  }

  private async loadLanguage() {
    let connected = await this._global.networkConnection.isConnected();
    await this._global.language.management.storage.setDefault(connected).then(async () => {
      this.isLoaded = true;
    });
  }
}
