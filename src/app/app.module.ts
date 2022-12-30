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

//Import Firebase
import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';

//Import Pipe
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Import Language Package
import { UiLanguagePipeModule } from './shared/pipes/language-transform-pipe/language-transform.pipe.module';
const langauges = [
  {language: { code: 'EN', name: 'language.english', flag: '🇺🇲' }},
  {language: { code: 'KR', name: 'language.korean', flag: '🇰🇷' }},
  {language: { code: 'CN', name: 'language.chinese', flag: '🇨🇳' }}
];

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    IonicModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    UiLanguagePipeModule.forRoot(langauges),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  exports: [],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
