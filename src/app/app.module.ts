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
import {
  connectFirestoreEmulator,
  enableIndexedDbPersistence,
  getFirestore,
  provideFirestore,
} from '@angular/fire/firestore';

//Import Language Package
import { LanguageTransformPipeModule } from './pipe/language-transform-pipe/language-transform.pipe.module';
import { MintueTransformPipeModule } from './pipe/mintue/mintue.pipe.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KendoUiModule } from './component/global/kendo-ui-module/kendo-ui-module.module';
import { LanguageSelectionModule } from './component/global/langauge-selection/language-selection.module';
import { DaysTransformPipeModule } from './pipe/days/days.pipe.module';
import 'hammerjs';

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
    provideFirestore(() => {
      const firestore = getFirestore();
      connectFirestoreEmulator(firestore, 'localhost', 8080);
      enableIndexedDbPersistence(firestore);
      return firestore;
    }),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
  ],
  exports: [],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
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
