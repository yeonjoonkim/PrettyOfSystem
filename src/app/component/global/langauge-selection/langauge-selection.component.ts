import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NameValuePairType } from 'src/app/interface/global/global.interface';
import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'langauge-selection',
  templateUrl: './langauge-selection.component.html',
  styleUrls: ['./langauge-selection.component.scss'],
})
export class LangaugeSelectionComponent implements OnInit {
  @Output() selectedCodeChange = new EventEmitter<string>();
  @Input() readOnly: boolean = false;
  @Input()
  get selectedCode(): string {
    return this.selected.value;
  }
  set selectedCode(value: string) {
    const language = this.languages.find(s => s.value === value);
    if (language !== undefined) {
      this.selected = language;
    }
  }

  @ViewChild('dropdownlist')
  public dropdownlist!: DropDownListComponent;
  public selected: NameValuePairType = { name: '', value: '' };
  public languages: NameValuePairType[] = [
    { name: 'हिन्दी', value: 'hi_in' }, // Hindi
    { name: '한국어', value: 'ko' }, // Korean
    { name: 'Italiano', value: 'it' }, // Italian
    { name: '日本語', value: 'ja' }, // Japanese
    { name: '简体中文', value: 'zh-hans' }, // Simplified Chinese
    { name: '繁體中文', value: 'zh-hant' }, // Traditional Chinese
    { name: 'Filipino', value: 'tl-ph' }, // Filipino
    { name: 'Español', value: 'es' }, // Spanish
    { name: 'Tiếng Việt', value: 'vi-vn' }, // Vietnamese
    { name: 'English', value: 'en' }, // English
    { name: 'Indonesia', value: 'id_id' }, // Indonesian
    { name: 'Français', value: 'fr' }, // French
    { name: 'ไทย', value: 'th' },
  ];

  constructor() {}

  async ngOnInit() {}

  public async onChangeLanguage() {
    this.selectedCode = this.selected.value;
    this.selectedCodeChange.emit(this.selected.value);
  }
}
