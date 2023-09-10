import { DeviceWidthService } from 'src/app/service/global/device-width/device-width.service';
import { LanguageService } from 'src/app/service/global/language/language.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from './service/global/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private deviceTypeSubscription!: Subscription;
  public isLoaded: boolean = false;
  private languageChangeActionSubscription!: Subscription;

  constructor(
    private language: LanguageService,
    private deviceWidth: DeviceWidthService,
    private storage: StorageService
  ) {}

  async ngOnInit() {
    await this.storage.create();
    this.subscribeDeviceWidth();
    this.subscribeLanguageChangeAction();
    await this.loading();
  }

  async ngOnDestroy() {
    this.deviceTypeSubscription?.unsubscribe();
    this.languageChangeActionSubscription?.unsubscribe();
  }

  private async subscribeLanguageChangeAction() {
    this.languageChangeActionSubscription = this.language.changeLanguageAction.subscribe(
      async i => {
        this.ngOnDestroy();
        window.location.reload();
      }
    );
  }

  private async subscribeDeviceWidth() {
    this.deviceTypeSubscription = this.deviceWidth.deviceTypeObservable.subscribe(device => {
      this.deviceWidth.deviceType = device;
    });
  }

  private async loading() {
    await this.language.management.storage.setDefault().then(async () => {
      await this.language.setCurrentLanguage();
      this.isLoaded = true;
    });
  }
}
