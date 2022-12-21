
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

//Import Language
import { UiLanguagePipe } from '../shared/pipes/language-transform-pipe/language-transform.pipe';
import { UiLanguageComponent } from '../shared/components/ui-language/ui-language.component';

//Import Setting
import { SettingComponent } from '../shared/components/setting/setting.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, UiLanguagePipe, UiLanguageComponent, SettingComponent],
  exports: [UiLanguageComponent, SettingComponent]
})
export class HomePageModule {}
