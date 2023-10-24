import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import {
  PairKeyValueType,
  NameValuePairType,
  PairNameValueTypeFilterParamType,
} from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'name-value-pair-multi-dropdown-list',
  templateUrl: './name-value-pair-multi-dropdown-list.component.html',
  styleUrls: ['./name-value-pair-multi-dropdown-list.component.scss'],
})
export class NameValuePairMultiDropdownlistComponent implements OnInit {
  @ViewChild('multiDropdownList') dropdownListBtn!: ElementRef;
  public gridData: NameValuePairType[] = [];
  public selection: NameValuePairType[] = [];
  public queryParamList: PairNameValueTypeFilterParamType[] = [];
  public selected!: NameValuePairType[] | undefined;
  public filterable: boolean = false;
  public orderByName: boolean = false;
  public query: string = '';
  public maxHeight: string = '150px';
  private _defaultLanguageKeyPairValue: PairKeyValueType[] = [];

  public rowClass = (args: { dataItem: { value: string | undefined } }) => ({
    'k-selected':
      this.selected?.some(r => r?.value === args.dataItem?.value) || this.selected?.length === 0,
  });

  constructor(
    private _navParams: NavParams,
    private _popoverCtrl: PopoverController,
    private _global: GlobalService
  ) {
    this.queryParamList = this._navParams.get('queryParams');
    this.orderByName = this._navParams.get('orderByName');
    this.selection = this._navParams.get('selection');
    this.gridData = this.selection;
    this.selected = this._navParams.get('selected');
    this.filterable = this._navParams.get('filterable');
    this.maxHeight = this._navParams.get('maxHeight');
    this.maxHeight = this.maxHeight.includes('px') ? this.maxHeight : this.maxHeight + 'px';
  }
  async ngOnInit() {
    const defaultKeyPairValue = await this._global.language.management.getDefaultKeyPairValueList();
    this._defaultLanguageKeyPairValue = defaultKeyPairValue;
  }

  public async onClickCell(selected: NameValuePairType) {
    let newSelected: NameValuePairType = selected;
    this.selected = this.selected === undefined ? [] : this.selected;
    const isExisted = this.selected.filter(s => s.value === newSelected.value).length > 0;
    const currentSelectedValues = this.selected.concat(newSelected).map(s => s.value);
    const selectionValues = this.selection.map(s => s.value);
    const allSelected = selectionValues.every(val => currentSelectedValues.includes(val));

    if (!isExisted) {
      this.selected.push(newSelected);
    }
    if (isExisted) {
      this.selected = this.selected.filter(r => r.value !== newSelected.value);
    }
    if (allSelected) {
      this.selected = [];
    }
  }

  public all() {
    this.selected = [];
  }

  public isInclude(data: NameValuePairType) {
    if (!this.selected) {
      return false; // or true, depending on your business logic
    }

    return (
      this.selected.filter(s => s?.value === data.value).length > 0 || this.selected.length === 0
    );
  }

  public async apply() {
    await this._popoverCtrl.dismiss({ selected: this.selected });
  }

  public onQueryChange() {
    const queryParam: string = this.query.toLowerCase();
    const english = this._defaultLanguageKeyPairValue.filter(eng =>
      eng.value.toLowerCase().includes(queryParam)
    );
    const queryResult: NameValuePairType[] = this.queryParamList
      .map(param => {
        let eng = english.find(eng => eng.key === param.name);
        return {
          paramName: param.name,
          paramTranslatedName: param.translatedName,
          paramValue: param.value,
          paramEnglish: eng?.value,
        };
      })
      .filter(
        q =>
          q.paramTranslatedName.toLowerCase().includes(queryParam) ||
          q.paramEnglish?.toLowerCase()?.includes(queryParam)
      )
      .sort((a, b) =>
        this.orderByName ? a.paramTranslatedName.localeCompare(b.paramTranslatedName) : 0
      )
      .map(q => {
        return { name: q.paramName, value: q.paramValue };
      });
    this.gridData = queryResult;
  }

  allToFirstIndex(result: NameValuePairType[]) {
    let isAllExisted: boolean = result.filter(r => r.name === 'label.title.all').length > 0;

    if (isAllExisted) {
      result = result.filter(r => r.name !== 'label.title.all');
      result.unshift({ name: 'label.title.all', value: '' });
    }
    return result;
  }
}
