import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../../pipe/language-transform-pipe/language-transform.pipe.module';

//Import Component
import { AddMenuCategoryContentComponent } from './add-menu-category-content.component';

//Import Module
import { IonicIconSelectionModule } from 'src/app/component/global/ionic-icon-selection/ionic-icon-selection.module';
import { YesNoSelectionModule } from 'src/app/component/global/form/yes-no-selection/yes-no-selection.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
@NgModule({
  declarations: [AddMenuCategoryContentComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    IonicIconSelectionModule,
    YesNoSelectionModule,
    KendoUiModule,
  ],
  exports: [AddMenuCategoryContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SystemMenuAddCategoryContentModule {}
