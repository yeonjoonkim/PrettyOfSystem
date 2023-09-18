import { MenuCategoryType } from 'src/app/interface/menu/menu.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { LanguageService } from 'src/app/service/global/language/language.service';
import { StorageService } from 'src/app/service/global/storage/storage.service';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { UserService } from 'src/app/service/user/user.service';
import { IUser } from 'src/app/interface/user/user.interface';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'side-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

//InProgress
//Todo: Add @Input from app component 'User-Info'
export class MenuComponent implements OnInit, OnDestroy {
  public selectedLangauge: string = '';
  public selectedTitleHeading: string = '';
  public selectedCategory: string = '';
  public user: IUser;
  public menus: MenuCategoryType[] = [];

  constructor(
    public language: LanguageService,
    private _storage: StorageService,
    private _location: Location,
    private _systemMenuRepository: SystemMenuRepositoryService,
    private _userService: UserService,
    private _menuCtrl: MenuController,
    private _router: Router
  ) {
    this.user = this._userService.defaultUser();
    this.testing();
    this.getCurrentLanguage();
    this.getAccessGrantedMenu();
  }

  async ngOnInit() {}

  ngOnDestroy() {}

  private async testing() {}

  private async getAccessGrantedMenu() {
    // if (this.user.currentShop?.role?.accessLevel) {
    //   this.menus = await this.systemMenuRepository.getAccessGrantedMenu(
    //     this.user.currentShop?.role?.accessLevel
    //   );
    // }

    this.menus = await this._systemMenuRepository.getAccessGrantedMenu({
      isAdmin: false,
      isEmployee: false,
      isManager: false,
      isReception: false,
      isSystemAdmin: true,
    });

    await this.setDefaultTitleHeading();
  }

  private async getCurrentLanguage() {
    let currentLang = await this._storage.getLanguage();
    this.selectedLangauge = currentLang !== null ? currentLang : this.language.deafultLanguageCode;
  }

  /** Implemented on the ngOnInit to set up the default Title Heading param */
  async setDefaultTitleHeading() {
    let currentUrl = this._location.path();
    await this.onChangeMenu(currentUrl);
  }

  async logout() {
    this._router.navigateByUrl('/login');
  }

  /** This function will change the title heading param based on current url.*/
  async onChangeMenu(url: string) {
    let selectedMenu = this.menus.find(s => {
      let menu = s.content.find(c => c.url === url);
      return menu;
    });
    this.selectedTitleHeading = selectedMenu !== undefined ? selectedMenu.name : '';
    this._menuCtrl.close();
  }
}
