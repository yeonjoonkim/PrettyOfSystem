import { DeviceWidthService } from './shared/services/device-width/device-width.service';
import { LanguageService } from './shared/services/language/language.service';
import {  Component, OnDestroy, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Subscription } from 'rxjs';
import { SystemLanguageRepositoryService } from './firebase/system-repository/language/system-language-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit, OnDestroy {
  private deviceTypeSubscription!: Subscription;
  public isLoaded: boolean = false;
  private languageChangeActionSubscription: Subscription | undefined;

  constructor(private storage: Storage, private language: LanguageService, private sysLanguageRepo: SystemLanguageRepositoryService,
              private deviceWidth: DeviceWidthService) {
    this.language.languageSelection = this.sysLanguageRepo.getLanguageSelectionResult();
    this.deviceTypeSubscription = this.deviceWidth.deviceTypeObservable.subscribe(device => {this.deviceWidth.deviceType = device;});
    this.storage.create();
  }

  async ngOnInit(){
    this.subscribeLanguage();
    await this.delay();
  }

  async IonViewDidEnter(){
  }

  async delay(){
    setTimeout(() => {
      this.isLoaded = true;
    }, 300);
  }

  async ngOnDestroy(){
    this.deviceTypeSubscription.unsubscribe();
    this.languageChangeActionSubscription?.unsubscribe();
  }

  async subscribeLanguage(){
  this.languageChangeActionSubscription = this.language.changeLanguageAction.subscribe(async (i) => {
      this.ngOnDestroy();
      window.location.reload();
    });
  }

}
