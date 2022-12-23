import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { SystemPageRoutingModule } from './system-routing.module';
import { SystemPage } from './system.page';

//import Pipe
import { UiLanguagePipeModule } from '../../shared/pipes/language-transform-pipe/language-transform.pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemPageRoutingModule,
    UiLanguagePipeModule
  ],
  declarations: [SystemPage]
})
export class SystemPageModule {}
