import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { CellClickEvent } from '@progress/kendo-angular-grid';
import {
  PairKeyValueType,
  NameValuePairType,
  PairNameValueTypeFilterParamType,
} from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'name-value-pair-single-dropdown-list',
  templateUrl: './name-value-pair-single-dropdown-list.component.html',
  styleUrls: ['./name-value-pair-single-dropdown-list.component.scss'],
})
export class NameValuePairSingleDropdownlistComponent implements OnInit {
  public gridData: NameValuePairType[] = [];
  public selection: NameValuePairType[] = [];
  public queryParamList: PairNameValueTypeFilterParamType[] = [];
  public selected!: NameValuePairType | undefined;
  public filterable: boolean = false;
  public orderByName: boolean = false;
  public query: string = '';
  public maxHeight: string = '150px';
  private _defaultLanguageKeyPairValue: PairKeyValueType[] = [];

  public rowClass = (args: { dataItem: { value: string | undefined } }) => ({
    'k-selected': args.dataItem?.value === this?.selected?.value,
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

  public async onClickCell(data: NameValuePairType) {
    this.selected = data;
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
        this.orderByName
          ? a.paramTranslatedName.localeCompare(b.paramTranslatedName)
          : a.paramValue.localeCompare(b.paramValue)
      )
      .map(q => {
        return { name: q.paramName, value: q.paramValue };
      });

    this.gridData = this.allToFirstIndex(queryResult);
  }

  public isActive(data: NameValuePairType) {
    return this.selected?.value === data.value;
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
