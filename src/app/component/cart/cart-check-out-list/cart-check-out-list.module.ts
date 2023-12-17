import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { MintueTransformPipeModule } from 'src/app/pipe/mintue/mintue.pipe.module';
import { CurrencyPipeTransformModule } from 'src/app/pipe/currency/currency.pipe.module';
//Import Module
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';

//Import Component
import { CartCheckOutListComponent } from './cart-check-out-list.component';

@NgModule({
  declarations: [CartCheckOutListComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    MintueTransformPipeModule,
    CurrencyPipeTransformModule,
  ],
  exports: [CartCheckOutListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CartCheckoutListModule {}
