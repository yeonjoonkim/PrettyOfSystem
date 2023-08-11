import { AccessControlService } from './../../services/authentication/access-control/access-control.service';
import { IMenuCategory } from 'src/app/interface/menu/menu.interface';
import { Observable, firstValueFrom } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { LanguageService } from '../../services/global/language/language.service';
import { StorageService } from '../../services/global/storage/storage.service';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { UserService } from 'src/app/service/user/user.service';
import { IUser } from 'src/app/interface/user/user.interface';

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


  constructor(public language: LanguageService,
    private storage: StorageService,
    private location: Location,
    private systemMenuRepository: SystemMenuRepositoryService,
    private userService: UserService) {
      this.testing();
      this.getCurrentLanguage();
      this.getAccessGrantedMenu();
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  }

  private testing(){
    this.user.firstName = "Yeon Joon";
    this.user.lastName = "Kim";
    this.user.currentShop.role.name = "role.name.systemadministrator";
    this.user.currentShop.shopName = "So Thai Massage & Spa Market Square";
    this.user.currentShop.role.accessLevel.isSystemAdmin = true;
  }

  private async getAccessGrantedMenu(){
    this.menus = await this.systemMenuRepository.getAccessGrantedMenu(this.user.currentShop.role.accessLevel);
    await this.setDefaultTitleHeading();
  }

  private async getCurrentLanguage(){
    let currentLang = await this.storage.getLanguage();
    this.selectedLangauge = currentLang !== null ? currentLang : this.language.deafultLanguageCode;
  }

  /** Implemented on the ngOnInit to set up the default Title Heading param */
  async setDefaultTitleHeading(){
    let currentUrl = this.location.path();
    await this.onChangeMenu(currentUrl);
  }


  /** This function will change the title heading param based on current url.*/
  async onChangeMenu(url: string){
    let selectedMenu = this.menus.find(
      s => {
        let menu = s.content.find(c => c.url === url);
        return menu;
    });
    this.selectedTitleHeading = selectedMenu !== undefined ? selectedMenu.name : '';
  }
}
