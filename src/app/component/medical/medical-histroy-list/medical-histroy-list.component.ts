import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserMedicalHistoryType } from 'src/app/interface';

@Component({
  selector: 'medical-histroy-list',
  templateUrl: './medical-histroy-list.component.html',
  styleUrls: ['./medical-histroy-list.component.scss'],
})
export class MedicalHistroyListComponent implements OnInit {
  @Output() userListChange = new EventEmitter<UserMedicalHistoryType[]>();
  @Input() title: string = '';
  @Input() selection: UserMedicalHistoryType[] = [];
  @Input() readOnly: boolean = true;
  @Input() isClient: boolean = true;
  @Input() system!:
    | 'Integumentary'
    | 'Skeletal'
    | 'Muscular'
    | 'Nervous'
    | 'Endocrine'
    | 'Cardiovascular'
    | 'Lymphatic'
    | 'Respiratory'
    | 'Digestive'
    | 'Urinary'
    | 'Reproductive';

  @Input()
  get userList(): UserMedicalHistoryType[] {
    return this.userInputList;
  }
  set userList(value: UserMedicalHistoryType[]) {
    this.userInputList = value;
  }
  public userInputList: UserMedicalHistoryType[] = [];

  constructor() {}
  ngOnInit() {}

  public hasRecord() {
    const records = this.userInputList.filter(s => s.system === this.system);
    return records.length > 0;
  }

  public isIncluded(history: UserMedicalHistoryType) {
    return this.userInputList.some(s => s.system === history.system && s.name === history.name);
  }

  public onClickHistory(history: UserMedicalHistoryType) {
    const isIncluded = this.isIncluded(history);
    const adding = !this.readOnly && !isIncluded;
    const deleting = !this.readOnly && isIncluded;

    if (adding) {
      this.userInputList.push(history);
      this.userListChange.emit(this.userInputList);
    }

    if (deleting) {
      this.userInputList = this.userInputList.filter(
        s => !(s.name === history.name && s.system === history.system && s.cautionLevel === history.cautionLevel)
      );
      this.userListChange.emit(this.userInputList);
    }
  }

  onUserListChange() {}
}
