import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { IMenu } from '../interface/menu/menu.interface.service';
import { LanguageService } from '../shared/services/language/language.service';
import {StorageService} from '../shared/services/storage/storage.service';

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

  public user = {
    fullName: "Yeon Joon Kim",
    role: "Software Developer",
  };

  public menus: Array<IMenu> = [
    {
      title: "menu.name.management", icon: "build-outline",
      content: [
        {url: '/management/system', title: "menu.name.systemmanagement", icon: "code-slash-outline"},
        {url: '/management/shop', title: "menu.name.shopmanagement", icon: "bag-outline"},
        {url: '/management/user', title: "menu.name.usermangement", icon: "people-outline"},
        {url: '/management/payment', title: "menu.name.paymentmanagement", icon: "cash-outline"},
    ]}
  ];

  constructor(public language: LanguageService, private storage: StorageService, private location: Location) {
    this.storage.getCurrentLanguage().then(langCode => {
      this.selectedLangauge = langCode;
    });
  }


  async ngOnInit() {
    await this.setDefaultTitleHeading();
  }


  ngOnDestroy(){
  }

  /** Implemented on the ngOnInit to set up the default Title Heading param */
  async setDefaultTitleHeading(){
    let currentUrl = this.location.path();
    await this.onChangeMenu(currentUrl);
  }


  /** This function will set the global language by using language service. */
  async onChangeLanguage(){
    this.language.languageChange(this.selectedLangauge);
  }

  /** This function will change the title heading param based on current url.*/
  async onChangeMenu(url: string){
    this.menus.forEach(menu => {
      let isCurrentMenu = menu.content.filter(content => content.url === url).length > 0;
      if(isCurrentMenu){
        this.selectedTitleHeading = menu.title;
      }
    });
  }

}
