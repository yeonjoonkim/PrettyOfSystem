import { Component, Input, OnInit } from '@angular/core';
import { UserMedicalHistoryType } from 'src/app/interface';

@Component({
  selector: 'medical-histroy-chip',
  templateUrl: './medical-histroy-chip.component.html',
  styleUrls: ['./medical-histroy-chip.component.scss'],
})
export class MedicalHistroyChipComponent implements OnInit {
  @Input() readOnly: boolean = true;
  @Input() isClient: boolean = true;
  @Input() active: boolean = true;
  @Input() history!: UserMedicalHistoryType;
  constructor() {}

  ngOnInit() {}

  get classes(): string {
    let classList = '';
    if (!this.readOnly) {
      classList += 'edit-mode ';
    }
    if (this.active && this.isClient) {
      classList += 'client-active ';
    }
    return classList.trim();
  }
}
