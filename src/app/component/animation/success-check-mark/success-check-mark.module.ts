import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { SuccessCheckMarkComponent } from './success-check-mark.component';

//Import Pipe

@NgModule({
  declarations: [SuccessCheckMarkComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [SuccessCheckMarkComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SuccessCheckMarkModule {}
