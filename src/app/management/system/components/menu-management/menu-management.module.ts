import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA,NgModule} from '@angular/core';


//Import Pipe
import { LanguageTransformPipeModule } from '../../../../shared/pipes/language-transform-pipe/language-transform.pipe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Import Component
import { MenuManagementComponent } from './menu-management/menu-management.component';
import { AddMenuCategoryComponent } from './add-menu-category/add-menu-category.component';
import { MenuCategoryCardComponent } from './menu-category-card/menu-category-card.component';
import { MenuCategoryContentCardComponent } from './menu-category-content-card/menu-category-content-card.component';
import { AddMenuCategoryContentComponent } from './add-menu-category-content/add-menu-category-content.component';

//Import Module
import { IonicIconSelectionModule } from 'src/app/shared/components/ionic-icon-selection/ionic-icon-selection.module';
import { YesNoSelectionModule } from 'src/app/shared/components/yes-no-selection/yes-no-selection.module';
import { KendoUiModule } from 'src/app/shared/kendo-ui-module/kendo-ui-module.module';
@NgModule({
  declarations: [
    MenuManagementComponent,
    AddMenuCategoryComponent,
    MenuCategoryCardComponent,
    MenuCategoryContentCardComponent,
    AddMenuCategoryContentComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    Ng2SearchPipeModule,
    IonicIconSelectionModule,
    YesNoSelectionModule,
    KendoUiModule
  ],
  exports: [MenuManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class MenuManagementModule { }
