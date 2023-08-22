import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../../pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { IonicIconSelectionModule } from 'src/app/shared/components/ionic-icon-selection/ionic-icon-selection.module';
import { SharedFormModule } from 'src/app/component/global/form/form.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';

//Import Component
import { RoleComponent } from './role.component';
@NgModule({
  declarations: [RoleComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    SharedFormModule,
    LanguageTransformPipeModule,
    KendoUiModule,
  ],
  exports: [RoleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SystemRoleModule {}
