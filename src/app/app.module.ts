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
import { getAuth, provideAuth } from '@angular/fire/auth';

//Import Language Package
import { LanguageTransformPipeModule } from './pipe/language-transform-pipe/language-transform.pipe.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KendoUiModule } from './component/global/kendo-ui-module/kendo-ui-module.module';
import 'hammerjs';

//Delcalration for Shared Component
import { MenuComponent } from './component/global/menu/menu.component';
import { LangaugeSelectionComponent } from './component/global/langauge-selection/langauge-selection.component';
import { SharedFormModule } from './component/form/form.module';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

@NgModule({
  declarations: [AppComponent, MenuComponent, LangaugeSelectionComponent],
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
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    LanguageTransformPipeModule.forRoot(),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
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
    console.log(appCheck);
  }
}
