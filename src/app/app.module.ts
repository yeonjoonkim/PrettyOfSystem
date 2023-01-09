import { LOCALE_ID } from '@angular/core';
//Import Environment
import { environment } from 'src/environments/environment';

//Import App Module
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Import Ionic Angular
import { CUSTOM_ELEMENTS_SCHEMA, NgModule,  NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Import Component
import { MenuComponent } from './shared/components/menu/menu.component';
import { LangaugeSelectionComponent } from './shared/components/langauge-selection/langauge-selection.component';


//Import Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

//Import Pipe
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Import Language Package
import { LanguageTransformPipeModule } from './shared/pipes/language-transform-pipe/language-transform.pipe.module';
import { registerLocaleData } from '@angular/common';
import localeKo from '@angular/common/locales/ko';
import localeJa from '@angular/common/locales/ja';
import localeEn from '@angular/common/locales/en';
import localeZh from '@angular/common/locales/zh';


@NgModule({
  declarations: [AppComponent, MenuComponent, LangaugeSelectionComponent],
  imports: [
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    LanguageTransformPipeModule.forRoot(),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  exports: [],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'en' || 'ko' },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {
}
