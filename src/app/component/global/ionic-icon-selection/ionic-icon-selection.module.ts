//Import Ionic Angular Module
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { FilterPipeModule } from 'src/app/pipe/filter/filter.pipe.module';

//Import Component
import { IonicIconSelectionComponent } from './ionic-icon-selection.component';
import { IonicIconListComponent } from './ionic-icon-list/ionic-icon-list.component';
import { KendoUiModule } from '../kendo-ui-module/kendo-ui-module.module';
@NgModule({
  declarations: [IonicIconSelectionComponent, IonicIconListComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    FilterPipeModule,
    KendoUiModule,
  ],
  exports: [IonicIconSelectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class IonicIconSelectionModule {}
