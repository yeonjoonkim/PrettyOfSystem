import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SystemLanguagePageRoutingModule } from './system-language-routing.module';
import { SystemLanguagePage } from './system-language.page';

import { LanguageTransformPipeModule } from '../../../shared/pipes/language-transform-pipe/language-transform.pipe.module';

import { KendoUiModule } from 'src/app/shared/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/shared/components/form/form.module';

import { DictionaryModule } from 'src/app/component/system/language/dictonary/dictionary.module';
import { LanguageMangementModule } from 'src/app/component/system/language/language-management/language-management.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemLanguagePageRoutingModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    SharedFormModule,
    DictionaryModule,
    LanguageMangementModule
  ],
  declarations: [SystemLanguagePage]
})
export class SystemLanguagePageModule {}
