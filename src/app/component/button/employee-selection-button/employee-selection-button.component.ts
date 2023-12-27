import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as Constant from 'src/app/constant/constant';

@Component({
  selector: 'employee-selection-button',
  templateUrl: './employee-selection-button.component.html',
  styleUrls: ['./employee-selection-button.component.scss'],
})
export class EmployeeSelectionButtonComponent implements OnInit {
  @Output() click = new EventEmitter<void>();
  @Input() active!: boolean;
  @Input() Id!: string;
  @Input() fullName!: string;
  @Input() gender!: Constant.GenderType;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.click.emit();
  }
}
