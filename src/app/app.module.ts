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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Import Component
import { MenuComponent } from './menu/menu.component';


//Import Language Package
import { UiLanguagePipeModule } from './shared/pipes/language-transform-pipe/language-transform.pipe.module';
import * as krLanguagePackage from './shared/services/language/language-package/kr.language';
import * as cnLanguagePackage from './shared/services/language/language-package/cn.language';
import * as enLanguagePackage from './shared/services/language/language-package/en.language';
const langauges =[
  {language: {code: 'EN', name: 'language.englishLangauge', flag: '🇺🇲'}, file: enLanguagePackage},
  {language: {code: 'KR', name: 'language.koreanLangauge',  flag: '🇰🇷'}, file: krLanguagePackage},
  {language: {code: 'CN', name: 'language.chineseLangauge', flag: '🇨🇳'}, file: cnLanguagePackage},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    IonicModule.forRoot(),
    UiLanguagePipeModule.forRoot(langauges),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports:[
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
