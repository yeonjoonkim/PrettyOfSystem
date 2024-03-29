import { MenuCategoryType } from 'src/app/interface/menu/menu.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { StorageService } from 'src/app/service/global/storage/storage.service';
import { UserService } from 'src/app/service/user/user.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { NameValuePairType } from 'src/app/interface';
import { AgreementModalService } from 'src/app/service/global/agreement-modal/agreement-modal.service';

@Component({
  selector: 'side-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  private _onDestroy$ = new Subject<void>();
  public shopSelection: NameValuePairType[] = [];
  public selectedShop: NameValuePairType = { name: '', value: '' };
  public selectedLangauge: string = '';
  public selectedTitleHeading: string = '';
  public selectedCategory: string = '';
  public menus: MenuCategoryType[] = [];

  constructor(
    public user: UserService,
    private _storage: StorageService,
    private _location: Location,
    private _menuCtrl: MenuController,
    private _router: Router,
    private _appAgreement: AgreementModalService
  ) {}

  async ngOnInit() {
    this.getCurrentLanguage();
    this.subscribeUserMenu();
    this.subscribeShopSelection();
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  public async onChangeMenu(url: string) {
    let selectedMenu = this.menus.find(s => {
      let menu = s.content.find(c => c.url === url);
      return menu;
    });
    const userPage = this.handleCustomPage(url);
    const name =
      selectedMenu !== undefined ? selectedMenu.name : url === '/booking' ? 'booking' : userPage ? userPage : '';
    this.selectedTitleHeading = name;
    this._menuCtrl.close();
  }

  public onClickUser(title: string) {
    this.selectedTitleHeading = title;
    this._menuCtrl.close();
  }

  public async presentEdit() {
    await this.user.presentEdit();
  }

  public async presentTermsandConditions() {
    await this._appAgreement.presentTermsandCondition();
  }

  public async presentPrivacyPolicy() {
    await this._appAgreement.presentPrivacyPolicy();
  }

  public logout() {
    this.user.logout();
  }

  public login() {
    this._router.navigateByUrl('/login');
  }

  private async getCurrentLanguage() {
    this.selectedLangauge = await this._storage.getLanguage();
  }

  public async handleCurrentShopChange() {
    await this.user.updateCurrentShop(this.selectedShop.value);
  }

  private async subscribeShopSelection() {
    this.user.shopSelection$.pipe(takeUntil(this._onDestroy$)).subscribe(selection => {
      this.shopSelection = selection;
    });
    this.user.currentShop$.pipe(takeUntil(this._onDestroy$)).subscribe(selected => {
      this.selectedShop = selected;
    });
  }

  private async subscribeUserMenu() {
    this.user.menu$.pipe(takeUntil(this._onDestroy$)).subscribe(async menu => {
      this.menus = menu;
      await this.setDefaultTitleHeading();
    });
  }

  private async setDefaultTitleHeading() {
    let currentUrl = this._location.path();
    await this.onChangeMenu(currentUrl);
  }

  public async clickHome() {
    this.onChangeMenu('/booking');
    await this._router.navigateByUrl('/booking');
  }

  private handleCustomPage(url: string) {
    const userInformation = 'user/information';
    const userSetting = 'user/setting';

    return userInformation || userSetting ? 'user' : '';
  }
}
