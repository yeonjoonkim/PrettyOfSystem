import { AccessControlService } from 'src/app/service/authentication/access-control/access-control.service';
import { IMenuCategory } from 'src/app/interface/menu/menu.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { LanguageService } from 'src/app/service/global/language/language.service';
import { StorageService } from 'src/app/service/global/storage/storage.service';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { UserService } from 'src/app/service/user/user.service';
import { IUser } from 'src/app/interface/user/user.interface';
import { MenuController } from '@ionic/angular';

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
  public user: IUser = this.userService.defaultUser();
  public menus: IMenuCategory[] = [];

  constructor(
    public language: LanguageService,
    private storage: StorageService,
    private location: Location,
    private systemMenuRepository: SystemMenuRepositoryService,
    private userService: UserService,
    private menuCtrl: MenuController
  ) {
    this.testing();
    this.getCurrentLanguage();
    this.getAccessGrantedMenu();
  }

  ngOnInit() {}

  ngOnDestroy() {}

  private testing() {
    this.user.firstName = 'Yeon Joon';
    this.user.lastName = 'Kim';
    if (this.user.currentShop !== null) {
      this.user.currentShop.role.name = 'role.title.systemadmin';
      this.user.currentShop.shopName = 'So Thai Massage & Spa Market Square';
      this.user.currentShop.role.accessLevel.isSystemAdmin = true;
    }
  }

  private async getAccessGrantedMenu() {
    if (this.user.currentShop?.role?.accessLevel) {
      this.menus = await this.systemMenuRepository.getAccessGrantedMenu(
        this.user.currentShop?.role?.accessLevel
      );
    }
    await this.setDefaultTitleHeading();
  }

  private async getCurrentLanguage() {
    let currentLang = await this.storage.getLanguage();
    this.selectedLangauge = currentLang !== null ? currentLang : this.language.deafultLanguageCode;
  }

  /** Implemented on the ngOnInit to set up the default Title Heading param */
  async setDefaultTitleHeading() {
    let currentUrl = this.location.path();
    await this.onChangeMenu(currentUrl);
  }

  /** This function will change the title heading param based on current url.*/
  async onChangeMenu(url: string) {
    let selectedMenu = this.menus.find(s => {
      let menu = s.content.find(c => c.url === url);
      return menu;
    });
    this.selectedTitleHeading = selectedMenu !== undefined ? selectedMenu.name : '';
    this.menuCtrl.close();
  }
}
