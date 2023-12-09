import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MassagePressureLevelService } from 'src/app/service/massage/massage-pressure-level/massage-pressure-level.service';

@Component({
  selector: 'massage-pressure-level-selector',
  templateUrl: './massage-pressure-level-selector.component.html',
  styleUrls: ['./massage-pressure-level-selector.component.scss'],
})
export class MassagePressureLevelSelectorComponent implements OnInit {
  @Output() levelChange = new EventEmitter<number>();
  @Input() level!: number;
  constructor(public pressureLevel: MassagePressureLevelService) {}

  ngOnInit() {}

  onChangePressureLevel() {
    this.levelChange.emit(this.level);
  }
}
