import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Config
import { GenderIconNamePipe } from './gender-icon-name.pipe';
@NgModule({
  imports: [CommonModule],
  exports: [GenderIconNamePipe],
  declarations: [GenderIconNamePipe],
})
export class GenderIconNamePipeMoudle {}
