import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'time-selection-button',
  templateUrl: './time-selection-button.component.html',
  styleUrls: ['./time-selection-button.component.scss'],
})
export class TimeSelectionButtonComponent implements OnInit {
  @Output() click = new EventEmitter<void>();
  @Input() dateTime!: string;
  @Input() active!: boolean;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.click.emit();
  }
}
