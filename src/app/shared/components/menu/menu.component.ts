import { AccessControlService } from './../../services/authentication/access-control/access-control.service';
import { IMenuCategory } from 'src/app/interface/menu/menu.interface';
import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { LanguageService } from '../../services/language/language.service';
import { StorageService } from '../../services/storage/storage.service';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';

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
  public user = {
    fullName: "Yeon Joon Kim",
    role: "Software Developer",
    roleConfig: {
      id: '',
      name: '',
      description: '',
      accessLevel: {
        isSystemAdmin: true,
        isAdmin: false,
        isManager: false,
        isEmployee: false,
        isReception: false
      },
      rate: 100000
    }
  };
  public menus: IMenuCategory[] = [];


  constructor(public language: LanguageService,
    private storage: StorageService,
    private location: Location,
    private accessControl: AccessControlService,
    private systemMenuRepository: SystemMenuRepositoryService) {
      this.getCurrentLanguage();
      this.getAccessGrantedMenu();
  }

  async ngOnInit() {
    await this.setDefaultTitleHeading();
  }

  ngOnDestroy(){
  }

  private async getAccessGrantedMenu(){
    this.systemMenuRepository.getSystemMenuCategories(
    ).subscribe(menu => {
      this.menus = this.accessControl.getAccessGrantedMenu(this.user.roleConfig, menu);
      this.setDefaultTitleHeading();
    });
  }

  private async getCurrentLanguage(){
    let currentLang = await this.storage.getCurrentLanguage();
    this.selectedLangauge = currentLang;
  }

  /** Implemented on the ngOnInit to set up the default Title Heading param */
  async setDefaultTitleHeading(){
    let currentUrl = this.location.path();
    await this.onChangeMenu(currentUrl);
  }


  /** This function will change the title heading param based on current url.*/
  async onChangeMenu(url: string){
      if(this.menus.length > 0){
        this.menus.forEach(m => {
          if(m.content.length > 0){
            let currentMenu = m.content.filter(content => content.url === url)[0];
            this.selectedTitleHeading =  currentMenu ? m.name : this.selectedTitleHeading;
          }
        });
      };
  }
}
