import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MassagePressureType } from 'src/app/interface';
import { MassageService } from 'src/app/service/massage/massage.service';

@Component({
  selector: 'massage-pressure-level-selector',
  templateUrl: './massage-pressure-level-selector.component.html',
  styleUrls: ['./massage-pressure-level-selector.component.scss'],
})
export class MassagePressureLevelSelectorComponent implements OnInit {
  @Output() pressureChange = new EventEmitter<MassagePressureType>();
  @Input() pressure!: MassagePressureType;
  constructor(public massage: MassageService) {}

  ngOnInit() {}

  onChangePressureLevel() {
    const description = this.massage.getPressureRatingDescription(this.pressure.rating);
    this.pressureChange.emit({ description: description, rating: this.pressure.rating });
  }
}
