//Import App Module
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Import Ionic Angular
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';


//Import Language Package
import { UiLanguagePipeModule } from './shared/pipes/language-transform-pipe/language-transform.pipe.module';
import * as krLanguagePackage from './shared/services/language/language-package/kr.language';
import * as cnLanguagePackage from './shared/services/language/language-package/cn.language';
import * as enLanguagePackage from './shared/services/language/language-package/en.language';
const langauges =[
  {language: {code: 'EN', name: 'englishLangauge', flag: '🇺🇲'}, file: enLanguagePackage},
  {language: {code: 'KR', name: 'koreanLangauge',  flag: '🇰🇷'}, file: krLanguagePackage},
  {language: {code: 'CN', name: 'chineseLangauge', flag: '🇨🇳'}, file: cnLanguagePackage},
];



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    IonicModule.forRoot(),
    UiLanguagePipeModule.forRoot(langauges),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
