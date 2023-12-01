import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';

//Import Component
import { MedicalHistroyChipComponent } from './medical-histroy-chip.component';

@NgModule({
  declarations: [MedicalHistroyChipComponent],
  imports: [CommonModule, IonicModule, FormsModule, LanguageTransformPipeModule, SharedFormModule, KendoUiModule],
  exports: [MedicalHistroyChipComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class MedicalHistoryChipModule {}
