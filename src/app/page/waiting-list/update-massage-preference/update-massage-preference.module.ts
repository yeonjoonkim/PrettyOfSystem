import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMassagePreferencePageRoutingModule } from './update-massage-preference-routing.module';

import { UpdateMassagePreferencePage } from './update-massage-preference.page';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { UserInformationModule } from 'src/app/component/user/user-information/user-information.module';
import { MobileVersionBodySelectorModule } from 'src/app/component/massage/mobile-version-body-selector/mobile-version-body-selector.module';
import { DesktopVersionBodySelectorModule } from 'src/app/component/massage/desktop-version-body-selector/desktop-version-body-selector.module';
import { ClientMassageBodySummaryModule } from 'src/app/component/massage/client-massage-body-summary/client-massage-body-summary.module';
import { MassagePressureLevelSelectorModule } from 'src/app/component/massage/massage-pressure-level-selector/massage-pressure-level-selector.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMassagePreferencePageRoutingModule,
    KendoUiModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    UserInformationModule,
    DesktopVersionBodySelectorModule,
    MobileVersionBodySelectorModule,
    ClientMassageBodySummaryModule,
    MassagePressureLevelSelectorModule,
  ],
  declarations: [UpdateMassagePreferencePage],
})
export class UpdateMassagePreferencePageModule {}
