import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'yes-no-selection',
  templateUrl: './yes-no-selection.component.html',
  styleUrls: ['./yes-no-selection.component.scss'],
})
export class YesNoSelectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() value: boolean = false;
  @Input() simpleMode: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() readOnly: boolean = false;
  @Input() isTitleRequired: boolean = true;
  @Output() valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  /** Click Toggle event to output the changed and return true or false */
  public onChangeSelection(): void {
    this.valueChange.emit(this.value);
  }
}
