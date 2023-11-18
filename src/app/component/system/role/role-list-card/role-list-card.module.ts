import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';

//Import Component
import { RoleListCardComponent } from './role-list-card.component';
@NgModule({
  declarations: [RoleListCardComponent],
  imports: [CommonModule, IonicModule, FormsModule, SharedFormModule, LanguageTransformPipeModule, KendoUiModule],
  exports: [RoleListCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SystemRoleListCardModule {}
