import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';
import { MassageBodySelectorPopoverModule } from '../massage-body-selector-popover/massage-body-selector-popover.module';
import { MassageBodyBackSelectorModule } from '../massage-body-back-selector/massage-body-back-selector.module';
import { MassageBodyFrontSelectorModule } from '../massage-body-front-selector/massage-body-front-selector.module';
import { DesktopVersionBodySelectorComponent } from './desktop-version-body-selector.component';

@NgModule({
  declarations: [DesktopVersionBodySelectorComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    MassageBodySelectorPopoverModule,
    MassageBodyBackSelectorModule,
    MassageBodyFrontSelectorModule,
  ],
  exports: [DesktopVersionBodySelectorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DesktopVersionBodySelectorModule {}
