//Import Environment
import { environment } from 'src/environments/environment';

//Import App Module
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Import Ionic Angular
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';

//Import Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { USE_DEVICE_LANGUAGE } from '@angular/fire/compat/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFirePerformanceModule, PerformanceMonitoringService } from '@angular/fire/compat/performance';
import {
  AngularFireAnalyticsModule,
  ScreenTrackingService,
  UserTrackingService,
  CONFIG,
} from '@angular/fire/compat/analytics';

//Investigate
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';

//Import Language Package
import { LanguageTransformPipeModule } from './pipe/language-transform-pipe/language-transform.pipe.module';
import { MintueTransformPipeModule } from './pipe/mintue/mintue.pipe.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KendoUiModule } from './component/global/kendo-ui-module/kendo-ui-module.module';
import { LanguageSelectionModule } from './component/global/langauge-selection/language-selection.module';
import { DaysTransformPipeModule } from './pipe/days/days.pipe.module';

//Delcalration for Shared Component
import { MenuComponent } from './component/global/menu/menu.component';
import { UserEditModule } from './component/user/user-edit/user-edit.module';
import { SharedFormModule } from './component/form/form.module';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    KendoUiModule,
    SharedFormModule,
    LanguageSelectionModule,
    BrowserAnimationsModule,
    UserEditModule,
    IonicModule.forRoot(),
    LanguageTransformPipeModule.forRoot(),
    MintueTransformPipeModule.forRoot(),
    DaysTransformPipeModule.forRoot(),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideStorage(() => getStorage()),
    provideFirestore(() => {
      const firestore = getFirestore();
      return firestore;
    }),
    provideAuth(() => {
      const app = initializeApp(environment.firebaseConfig);
      return getAuth(app);
    }),
    AngularFirePerformanceModule,
    AngularFireAnalyticsModule,
  ],
  exports: [],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: USE_DEVICE_LANGUAGE, useValue: true }, //Firebase - Auth
    PerformanceMonitoringService, //Firebase -- Performance Monitoring
    UserTrackingService, //Firebase - Analaytic
    ScreenTrackingService, //Firebase - Analaytic
    {
      provide: CONFIG,
      useValue: {
        send_page_view: true,
        allow_ad_personalization_signals: false,
        anonymize_ip: true,
      }, //Firebase - Analaytic
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule implements OnInit {
  constructor() {}
  async ngOnInit() {
    this.loadingRecap();
  }

  loadingRecap() {
    const app = initializeApp(environment.firebaseConfig);
    const appCheck = initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider('6LcxQTkoAAAAAJDSrZQT9sFfGQGq1EoDFoZxPpor'),
      isTokenAutoRefreshEnabled: true,
    });
  }
}
