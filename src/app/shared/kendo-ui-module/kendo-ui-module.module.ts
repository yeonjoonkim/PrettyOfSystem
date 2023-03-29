import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { BarcodesModule } from '@progress/kendo-angular-barcodes';


    import 'hammerjs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgModule,
    BrowserAnimationsModule,
    BarcodesModule,
    BrowserModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class KendoUiModuleModule { }
