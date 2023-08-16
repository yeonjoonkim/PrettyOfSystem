import { DeviceWidthService } from './shared/services/global/device-width/device-width.service';
import { LanguageService } from './shared/services/global/language/language.service';
import {  Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit, OnDestroy {
  private deviceTypeSubscription!: Subscription;
  public isLoaded: boolean = false;
  private languageChangeActionSubscription: Subscription | undefined;

  constructor(private language: LanguageService, private deviceWidth: DeviceWidthService, private storage: Storage) {
  }

  async ngOnInit(){
    await this.storage.create();
    this.subscribeDeviceWidth();
    this.subscribeLanguageChangeAction();
    await this.loading();
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

  private async loading(){
    await this.language.setLocalLanguageSelection();
    await this.language.setDefaultLanguage();
    this.isLoaded = true;
  }

}
