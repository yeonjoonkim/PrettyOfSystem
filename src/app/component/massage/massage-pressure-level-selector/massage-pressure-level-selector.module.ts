import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';
import { MassagePressureLevelSelectorComponent } from './massage-pressure-level-selector.component';

@NgModule({
  declarations: [MassagePressureLevelSelectorComponent],
  imports: [CommonModule, IonicModule, FormsModule, LanguageTransformPipeModule, SharedFormModule, KendoUiModule],
  exports: [MassagePressureLevelSelectorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class MassagePressureLevelSelectorModule {}
