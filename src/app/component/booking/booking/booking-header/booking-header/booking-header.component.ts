import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'booking-header',
  templateUrl: './booking-header.component.html',
  styleUrls: ['./booking-header.component.scss'],
})
export class BookingHeaderComponent implements OnInit, OnDestroy {
  @Input() isLoginRequired: boolean = true;
  private _loginStatusSubscription!: Subscription;
  private _isLogin: boolean = false;
  public isLogin$!: Observable<boolean>;
  public isLogout$!: Observable<boolean>;
  constructor(
    private _user: UserService,
    private _router: Router,
    private _menuCtrl: MenuController
  ) {
    this.isLogin$ = this._user.isLoggedin$;
    this.isLogout$ = this._user.isLoggedout$;
  }

  ngOnInit() {
    this._loginStatusSubscription = this.isLogin$.subscribe(status => {
      this._isLogin = status;
    });
  }

  ngOnDestroy() {
    this._loginStatusSubscription?.unsubscribe();
  }

  async logIn() {
    await this._router.navigateByUrl('/login');
  }

  async logout() {
    this._user.logout();
  }

  async openMenu() {
    if (this._isLogin) {
      this._menuCtrl.open();
    }
  }
}
