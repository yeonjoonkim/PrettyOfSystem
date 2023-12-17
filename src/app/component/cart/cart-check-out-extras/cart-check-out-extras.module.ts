import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';

//Import Component
import { CartCheckOutExtrasComponent } from './cart-check-out-extras.component';
import { ExtraPriceListCardModule } from '../../card/price-list-card/extra-price-list-card/extra-price-list-card.module';

@NgModule({
  declarations: [CartCheckOutExtrasComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    ExtraPriceListCardModule,
  ],
  exports: [CartCheckOutExtrasComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CartCheckoutExtrasModule {}
