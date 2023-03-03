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

  public user = {
    fullName: "Yeon Joon Kim",
    role: "Software Developer",
  };

  public menus: Observable<IMenuCategory[]> = this.systemMenuRepository.getSystemMenuCategories();

  constructor(public language: LanguageService, private storage: StorageService, private location: Location, private systemMenuRepository: SystemMenuRepositoryService) {

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


  /** This function will change the title heading param based on current url.*/
  async onChangeMenu(url: string){
    this.menus.forEach(menu => {
      menu.forEach(m => {
        let currentMenu = m.content.filter(content => content.url === url)[0];
        this.selectedTitleHeading = currentMenu.name

      });
    });
  }

}
