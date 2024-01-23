import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as Constant from 'src/app/constant/constant';
import { NameValuePairType } from 'src/app/interface/global/global.interface';

@Component({
  selector: 'gender-selection',
  templateUrl: './gender-selection.component.html',
  styleUrls: ['./gender-selection.component.scss'],
})
export class GenderSelectionComponent implements OnInit, OnChanges {
  @Output() genderChange: EventEmitter<Constant.GenderType> = new EventEmitter<Constant.GenderType>();
  @Input() title: string = 'label.title.gender';
  @Input() readOnly: boolean = false;
  @Input() mode: Constant.ComponentModeType = 'form';
  @Input()
  get gender(): Constant.GenderType {
    return this.inputGender;
  }
  set gender(gender: Constant.GenderType) {
    this.inputGender = gender;
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

  ngOnChanges(changes: SimpleChanges): void {
    const genderChange = changes['gender'];
    if (genderChange !== undefined) {
      this.selectedGender = this.convertToGenderSelectionType(genderChange.currentValue);
    }
  }

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
    let selectedGenderType: Constant.GenderType = this.convertToGenderType(this.selectedGender.value);
    this.inputGender = selectedGenderType;
    this.gender = this.inputGender;
    this.genderChange.emit(this.inputGender);
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

  private convertToGenderSelectionType(g: Constant.GenderType): NameValuePairType {
    switch (g) {
      case Constant.Default.Gender.All:
        return { value: Constant.Default.Gender.All, name: 'label.title.all' };
      case Constant.Default.Gender.Male:
        return { value: Constant.Default.Gender.Male, name: 'label.title.male' };
      case Constant.Default.Gender.Female:
        return { value: Constant.Default.Gender.Female, name: 'label.title.female' };
      case Constant.Default.Gender.Other:
        return { value: Constant.Default.Gender.Other, name: 'label.title.other' };
    }
  }
}
