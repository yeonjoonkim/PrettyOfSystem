import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA,NgModule} from '@angular/core';


//Import Pipe
import { LanguageTransformPipeModule } from '../../../../shared/pipes/language-transform-pipe/language-transform.pipe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Import Component
import { MenuManagementComponent } from './menu-management.component';

//Import Module
import { IonicIconSelectionModule } from 'src/app/shared/components/ionic-icon-selection/ionic-icon-selection.module';
import { YesNoSelectionModule } from 'src/app/shared/components/form/yes-no-selection/yes-no-selection.module';
import { KendoUiModule } from 'src/app/shared/kendo-ui-module/kendo-ui-module.module';
import { SystemMenuAddMenuCategoryModule } from '../add-menu-category/add-menu-category.module';
import { SystemMenuAddCategoryContentModule } from '../add-menu-category-content/add-menu-category-content.module';
import { SystemMenuCategoryCardModule } from '../menu-category-card/menu-category-card.module';
import { SystemMenuCategoryContentCardModule } from '../menu-category-content-card/menu-category-content-card.module';
@NgModule({
  declarations: [
    MenuManagementComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    Ng2SearchPipeModule,
    IonicIconSelectionModule,
    YesNoSelectionModule,
    KendoUiModule,
    SystemMenuAddMenuCategoryModule,
    SystemMenuAddCategoryContentModule,
    SystemMenuCategoryCardModule,
    SystemMenuCategoryContentCardModule
  ],
  exports: [MenuManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SystemMenuManagementModule { }
