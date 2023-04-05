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

  constructor(private storage: Storage, private language: LanguageService, private sysLanguageRepo: SystemLanguageRepositoryService, private deviceWidth: DeviceWidthService) {
    this.language.languageSelection = this.sysLanguageRepo.getLanguageSelectionResult();

    this.storage.create();
  }

  async ngOnInit(){
    this.subscribeDeviceWidth();
    this.subscribeLanguageChangeAction();
    await this.delay();
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

  private async subscribeLanguageChangeAction(){
  this.languageChangeActionSubscription = this.language.changeLanguageAction.subscribe(async (i) => {
      this.ngOnDestroy();
      window.location.reload();
    });
  }

  private async subscribeDeviceWidth(){
    this.deviceTypeSubscription = this.deviceWidth.deviceTypeObservable.subscribe(device => {this.deviceWidth.deviceType = device;});
  }

}
