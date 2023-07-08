import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global/global.service';

@Component({
  selector: 'percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.scss'],
})
export class PercentageComponent implements OnInit {
  @Output() onChangeValue = new EventEmitter<number>();
  @Output() valueChange = new EventEmitter<number>(); // EventEmitter for two-way binding

  @Input() title: string = '';
  @Input() readOnly: boolean = false;
  @Input() min: number = 0;
  @Input() max: number = 0;
  @Input() step: number = 1;

  @Input()
  get value() {
    return this.currentValue;
  }
  set value(value: number) {
    this.currentValue = value;
    this.onChangeValue.emit(this.value);
    this.valueChange.emit(this.value); // Emit changes for two-way binding
  }

  public currentValue: number = 0;

  constructor(private global: GlobalService) { }

  ngOnInit() {
    this.currentValue = this.global.numberTransform.nullReplaceToZero(this.currentValue);
  }
}
