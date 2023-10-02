import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';

//Import Component
import { UserEditComponent } from './user-edit.component';
import { GenderSelectionModule } from '../gender-selection/gender-selection.module';
import { LoginOptionSelectionModule } from '../login-option-selection/login-option-selection.module';
import { LanguageSelectionModule } from '../../global/langauge-selection/language-selection.module';
@NgModule({
  declarations: [UserEditComponent],
  imports: [
    CommonModule,
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    GenderSelectionModule,
    LoginOptionSelectionModule,
    LanguageSelectionModule,
  ],
  exports: [UserEditComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UserEditModule {}
