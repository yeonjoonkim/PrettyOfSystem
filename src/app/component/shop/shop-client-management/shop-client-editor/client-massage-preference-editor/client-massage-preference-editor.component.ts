import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { firstValueFrom } from 'rxjs';
import {
  GenderType,
  MassageBodySelectorAreaType,
  MassageDifficultChangePosition,
  MassagePressureType,
  UserSettingMassageType,
} from 'src/app/interface';

@Component({
  selector: 'client-massage-preference-editor',
  templateUrl: './client-massage-preference-editor.component.html',
  styleUrls: ['./client-massage-preference-editor.component.scss'],
})
export class ClientMassagePreferenceEditorComponent implements OnInit {
  @Output() massageChange = new EventEmitter<UserSettingMassageType>();

  @Input() type: 'client' | 'shop' = 'shop';
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() forceMobile: boolean = false;
  @Input() massage!: UserSettingMassageType;
  constructor() {}

  ngOnInit() {}

  public async onChangePressureLevel(level: MassagePressureType) {
    this.massage.pressure = level;
    this.massageChange.emit(this.massage);
  }

  public async onChangeGender(gender: GenderType) {
    this.massage.preferGender = gender;
    this.massageChange.emit(this.massage);
  }

  public async onChangeAreas(areas: MassageBodySelectorAreaType[]) {
    this.massage.areas = areas;
    this.massageChange.emit(this.massage);
  }

  public async onChangePosition(position: MassageDifficultChangePosition) {
    this.massage.difficultChangePosition = position;
    this.massageChange.emit(this.massage);
  }
}
