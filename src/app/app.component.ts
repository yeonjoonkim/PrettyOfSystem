import { LanguageService } from './shared/services/language/language.service';
import { AfterViewInit, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Subscription } from 'rxjs';
import { SystemLanguageRepositoryService } from './firebase/system-repository/language/system-language-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  public isLoaded: boolean = false;
  private languageChangeActionSubscription: Subscription | undefined;

  constructor(private storage: Storage, private language: LanguageService, private sysLanguageRepo: SystemLanguageRepositoryService) {
    this.language.languageSelection = this.sysLanguageRepo.getLanguageSelectionResult();
    this.storage.create();
  }

  ngOnInit(){
    this.subscribeLanguage();
  }

  async ngAfterViewInit(){
    await this.delay();
  }

  async IonViewDidEnter(){
  }

  async delay(){
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }

  async ngOnDestroy(){
    this.languageChangeActionSubscription?.unsubscribe();
  }

  async subscribeLanguage(){
  this.languageChangeActionSubscription = this.language.changeLanguageAction.subscribe(async (i) => {
      this.ngOnDestroy();
      window.location.reload();
    });
  }

}
