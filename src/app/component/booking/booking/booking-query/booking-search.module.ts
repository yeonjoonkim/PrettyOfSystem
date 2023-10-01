import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { BookingQueryComponent } from './booking-query.component';
@NgModule({
  declarations: [BookingQueryComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    SharedFormModule,
    ReactiveFormsModule,
  ],
  exports: [BookingQueryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class BookingQueryhModule {}
