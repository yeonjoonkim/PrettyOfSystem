import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { CheckInPageRoutingModule } from './check-in-routing.module';

import { CheckInPage } from './check-in.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, KendoUiModule, CheckInPageRoutingModule],
  declarations: [CheckInPage],
})
export class CheckInPageModule {}
