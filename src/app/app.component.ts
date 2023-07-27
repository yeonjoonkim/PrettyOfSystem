import { DeviceWidthService } from './shared/services/global/device-width/device-width.service';
import { LanguageService } from './shared/services/global/language/language.service';
import {  Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(private language: LanguageService, private sysLanguageRepo: SystemLanguageRepositoryService, private deviceWidth: DeviceWidthService) {
  }

  async ngOnInit(){
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
    let landingLanguagePackage = this.language.languageSelection.subscribe(received => {
       if(received){this.isLoaded = true; landingLanguagePackage.unsubscribe();}
       });
  }
}
