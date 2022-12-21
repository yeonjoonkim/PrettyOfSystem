import { LanguageService } from './shared/services/language/service/language.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private languageChangeActionSubscription: Subscription | undefined;

  constructor(private storage: Storage, private language: LanguageService) {
  }

  async ngOnInit(){
    await this.storage.create();
    this.subscribeLanguage();
  }

  async ngOnDestroy(){
    this.languageChangeActionSubscription?.unsubscribe();
  }

  subscribeLanguage(){
    this.languageChangeActionSubscription = this.language.changeLanguageAction
    .subscribe(
      () => {
        this.ngOnDestroy();
        this.ngOnInit();
      });
  }




}
