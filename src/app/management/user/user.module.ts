import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';
import { UserPage } from './user.page';

//import Pipe
import { LanguageTransformPipeModule } from '../../shared/pipes/language-transform-pipe/language-transform.pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule,
    LanguageTransformPipeModule
  ],
  declarations: [UserPage]
})
export class UserPageModule {}
