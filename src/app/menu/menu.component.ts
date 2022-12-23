import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { IMenu } from './../shared/interfaces/menu/menu.interface.service';
import { LanguageService } from '../shared/services/language/service/language.service';
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
      title: "menu.management", icon: "build-outline",
      content: [
        {url: '/management/system', title: "menu.systemManagement", icon: "code-slash-outline"},
        {url: '/management/shop', title: "menu.shopManagement", icon: "bag-outline"},
        {url: '/management/user', title: "menu.userManagement", icon: "people-outline"},
        {url: '/management/payment', title: "menu.paymentSubscriptionManagement", icon: "cash-outline"},
    ]},
    {
      title: "language.language", icon: "build-outline",
      content: [
    ]
  }];

  constructor(public language: LanguageService, private storage: StorageService, private location: Location) {
  }


  async ngOnInit() {
    await this.storage.getCurrentLanguage().then(langCode => {
      this.selectedLangauge = langCode;
    });
    await this.setDefaultTitleHeading();
  }


  ngOnDestroy(){
  }


  /** Implemented on the ngOnInit to set up the default Title Heading param */
  async setDefaultTitleHeading(){
    let currentUrl = this.location.path();
    await this.onChangeMenu(currentUrl);
    console.log(currentUrl)
  }


  /** This function will set the global language by using language service. */
  async onChangeLanguage(){
    await this.language.languageChange(this.selectedLangauge);
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
