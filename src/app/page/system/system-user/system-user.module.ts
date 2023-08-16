import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemUserPageRoutingModule } from './system-user-routing.module';

import { SystemUserPage } from './system-user.page';

import { LanguageTransformPipeModule } from '../../../shared/pipes/language-transform-pipe/language-transform.pipe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { KendoUiModule } from 'src/app/shared/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/shared/components/form/form.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemUserPageRoutingModule,
    KendoUiModule,
    SharedFormModule,
    LanguageTransformPipeModule,
    Ng2SearchPipeModule
  ],
  declarations: [SystemUserPage]
})
export class SystemUserPageModule {}
