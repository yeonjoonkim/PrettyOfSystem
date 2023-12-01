import { LanguageService } from 'src/app/service/global/language/language.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Config
import { MedicalHsitoryOtherStatusPipe } from './medical-hsitory-other-status.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [MedicalHsitoryOtherStatusPipe],
  declarations: [MedicalHsitoryOtherStatusPipe],
})
export class MedicalHsitoryOtherStatusPipeModule {
  static forRoot(): ModuleWithProviders<MedicalHsitoryOtherStatusPipeModule> {
    return {
      ngModule: MedicalHsitoryOtherStatusPipeModule,
      providers: [LanguageService],
    };
  }
}
