import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.scss'],
})
export class PercentageComponent implements OnInit {
  @Output() onChangeValue = new EventEmitter<number>();
  @Output() valueChange = new EventEmitter<number>();

  @Input() title: string = '';
  @Input() readOnly: boolean = false;
  @Input() min: number = 0;
  @Input() max: number = 1;
  @Input() step: number = 0.05;

  @Input()
  get value() {
    return this.currentValue;
  }
  set value(value: number) {
    this.currentValue = value;
    this.onChangeValue.emit(this.value);
    this.valueChange.emit(this.value);
  }

  public currentValue: number = 0;

  constructor(private _global: GlobalService) {}

  ngOnInit() {
    this.currentValue = this._global.numberTransform.nullReplaceToZero(this.currentValue);
  }
  changeValue() {
    this.currentValue = this._global.numberTransform.nullReplaceToZero(this.currentValue);
    this.value = this.currentValue;
  }
}
