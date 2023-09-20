import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as Constant from 'src/app/constant/constant';
import { NameValuePairType } from 'src/app/interface/global/global.interface';

@Component({
  selector: 'gender-selection',
  templateUrl: './gender-selection.component.html',
  styleUrls: ['./gender-selection.component.scss'],
})
export class GenderSelectionComponent implements OnInit {
  @Output() genderChange: EventEmitter<Constant.GenderType> =
    new EventEmitter<Constant.GenderType>();
  @Input() readOnly: boolean = false;
  @Input() mode: Constant.ComponentModeType = 'form';
  @Input()
  get gender(): Constant.GenderType {
    return this.inputGender;
  }
  set gender(gender: Constant.GenderType) {
    let selected = this.genderSelection.find(r => r.value === gender);
    this.inputGender = gender;
    this.selectedGender = selected !== undefined ? selected : this.selectedGender;
    this.genderChange.emit(gender);
  }

  public genderSelection: NameValuePairType[] = [
    { value: Constant.Default.Gender.Male, name: 'label.title.male' },
    { value: Constant.Default.Gender.Female, name: 'label.title.female' },
    { value: Constant.Default.Gender.Other, name: 'label.title.other' },
  ];

  public selectedGender: NameValuePairType = {
    value: Constant.Default.Gender.Male,
    name: 'label.title.male',
  };
  public inputGender: Constant.GenderType = Constant.Default.Gender.Male;
  constructor() {}

  ngOnInit() {
    if (this.mode === 'filter') {
      this.setFilterMode();
    }
  }

  private setFilterMode() {
    this.genderSelection.push({ value: Constant.Default.Gender.All, name: 'label.title.all' });
  }

  public onChangeGender(selected: NameValuePairType) {
    this.selectedGender = selected;
    let selectedGenderType: Constant.GenderType = this.convertToGenderType(
      this.selectedGender.value
    );
    this.inputGender = selectedGenderType;
    this.gender = this.inputGender;
  }

  private convertToGenderType(g: string): Constant.GenderType {
    let result: Constant.GenderType =
      g === Constant.Default.Gender.Male
        ? Constant.Default.Gender.Male
        : g === Constant.Default.Gender.Female
        ? Constant.Default.Gender.Female
        : g === Constant.Default.Gender.Other
        ? Constant.Default.Gender.Other
        : g === Constant.Default.Gender.All
        ? Constant.Default.Gender.All
        : Constant.Default.Gender.Male;

    return result;
  }
}
