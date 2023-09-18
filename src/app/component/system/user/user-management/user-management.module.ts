import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { LoginOptionSelectionModule } from 'src/app/component/user/login-option-selection/login-option-selection.module';
import { GenderSelectionModule } from 'src/app/component/user/gender-selection/gender-selection.module';

//Import Component
import { UserManagementComponent } from './user-management.component';
import { NewSystemAdminComponent } from '../new-system-admin/new-system-admin.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@NgModule({
  declarations: [UserManagementComponent, NewSystemAdminComponent, EditUserComponent],
  imports: [
    CommonModule,
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    LoginOptionSelectionModule,
    GenderSelectionModule,
  ],
  exports: [UserManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UserManagementModule {}
