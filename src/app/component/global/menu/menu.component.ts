import { MenuCategoryType } from 'src/app/interface/menu/menu.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { LanguageService } from 'src/app/service/global/language/language.service';
import { StorageService } from 'src/app/service/global/storage/storage.service';
import { UserService } from 'src/app/service/user/user.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NameValuePairType, UserAssociatedShopType } from 'src/app/interface';

@Component({
  selector: 'side-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

//InProgress
//Todo: Add @Input from app component 'User-Info'
export class MenuComponent implements OnInit, OnDestroy {
  private _menuSubscription!: Subscription;
  private _loginStatusSubscription!: Subscription;
  private _shopSelectionSubscription!: Subscription;
  private _currentShopSelectionSubscription!: Subscription;
  private _currentRoleNameSubscription!: Subscription;

  public shopSelection: NameValuePairType[] = [];
  public selectedShop: NameValuePairType = { name: '', value: '' };
  public selectedLangauge: string = '';
  public selectedTitleHeading: string = '';
  public selectedCategory: string = '';
  public menus: MenuCategoryType[] = [];
  public user = this.setDefaultUser();
  public isLogin: boolean = false;

  constructor(
    private _language: LanguageService,
    private _storage: StorageService,
    private _location: Location,
    private _user: UserService,
    private _menuCtrl: MenuController,
    private _router: Router
  ) {}

  async ngOnInit() {
    this.getCurrentLanguage();
    this.subscribeUserMenu();
    this.subscribeUserLoginStatus();
    this.subscribeShopSelection();
    this.subscribeRole();
  }

  ngOnDestroy() {
    this._menuSubscription?.unsubscribe();
    this._loginStatusSubscription?.unsubscribe();
    this._shopSelectionSubscription?.unsubscribe();
    this._currentShopSelectionSubscription?.unsubscribe();
    this._currentRoleNameSubscription?.unsubscribe();
  }
  public async onChangeMenu(url: string) {
    let selectedMenu = this.menus.find(s => {
      let menu = s.content.find(c => c.url === url);
      return menu;
    });
    this.selectedTitleHeading = selectedMenu !== undefined ? selectedMenu.name : '';
    this._menuCtrl.close();
  }

  public logout() {
    this._user.logout();
  }

  public login() {
    this._router.navigateByUrl('/login');
  }

  private async getCurrentLanguage() {
    let currentLang = await this._storage.getLanguage();
    this.selectedLangauge = currentLang !== null ? currentLang : this._language.deafultLanguageCode;
  }

  private setDefaultUser() {
    const fullname: string = '';
    const currentRole: string = '';
    const currentShopId: string = '';
    const associatedShop: UserAssociatedShopType[] = [];
    return {
      fullName: fullname,
      currentRole: currentRole,
      currentShopId: currentShopId,
      associatedShop: associatedShop,
    };
  }

  public async handleCurrentShopChange() {
    await this._user.updateCurrentShop(this.selectedShop.value);
  }

  private async setDefaultTitleHeading() {
    let currentUrl = this._location.path();
    await this.onChangeMenu(currentUrl);
  }

  private async subscribeUserMenu() {
    this._menuSubscription = this._user.menu$.subscribe(async menu => {
      this.menus = menu;
      await this.validateCurrentPath().then(async () => {
        await this.setDefaultTitleHeading();
      });
    });
  }
  private async subscribeShopSelection() {
    this._shopSelectionSubscription = this._user.shopSelection$.subscribe(selection => {
      this.shopSelection = selection;
    });
    this._currentShopSelectionSubscription = this._user.currentShop$.subscribe(current => {
      this.selectedShop = current;
    });
  }

  private async validateCurrentPath() {
    const currentUrl = this._location.path();
    const urls = this.menus.reduce<string[]>((acc, m) => {
      return acc.concat(m.content.map(s => s.url));
    }, []);
    const isInURL = urls.includes(currentUrl);

    if (!isInURL && !currentUrl.includes('login')) {
      this._router.navigateByUrl('/booking');
    }
  }

  private async subscribeUserLoginStatus() {
    this._loginStatusSubscription = this._user.data$.subscribe(credential => {
      //Login
      if (credential !== null) {
        this.user.fullName = credential.firstName + ' ' + credential.lastName;
        this.user.currentShopId = credential.currentShopId;
        this.user.associatedShop = credential.associatedShops;
        this.isLogin = true;
      }
      //Logout
      else {
        this.user = this.setDefaultUser();
        this.isLogin = false;
      }
    });
  }

  private async subscribeRole() {
    this._currentRoleNameSubscription = this._user.currentRole$.subscribe(role => {
      this.user.currentRole = role !== null ? role.name : '';
    });
  }
}
