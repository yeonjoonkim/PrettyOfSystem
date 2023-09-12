import { Component, OnChanges, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { CellClickEvent, RowClassArgs } from '@progress/kendo-angular-grid';
import {
  PairKeyValueType,
  PairNameValueType,
  PairNameValueTypeFilterParamType,
} from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'name-pair-value-dropdown-list',
  templateUrl: './name-pair-value-dropdown-list.component.html',
  styleUrls: ['./name-pair-value-dropdown-list.component.scss'],
})
export class NamePairValueDropdownlistComponent implements OnInit {
  public gridData: PairNameValueType[] = [];
  public selection: PairNameValueType[] = [];
  public queryParamList: PairNameValueTypeFilterParamType[] = [];
  public selected!: PairNameValueType | undefined;
  public filterable: boolean = false;
  public orderByName: boolean = false;
  public query: string = '';
  public maxHeight: string = '150px';
  private defaultLanguageKeyPairValue: PairKeyValueType[] = [];

  public rowClass = (args: { dataItem: { value: string | undefined } }) => ({
    'k-selected': args.dataItem?.value === this?.selected?.value,
  });

  constructor(
    private navParams: NavParams,
    private popoverCtrl: PopoverController,
    private global: GlobalService
  ) {
    this.queryParamList = this.navParams.get('queryParams');
    this.orderByName = this.navParams.get('orderByName');
    this.selection = this.navParams.get('selection');
    this.gridData = this.selection;
    this.selected = this.navParams.get('selected');
    this.filterable = this.navParams.get('filterable');
    this.maxHeight = this.navParams.get('maxHeight');
    this.maxHeight = this.maxHeight.includes('px') ? this.maxHeight : this.maxHeight + 'px';
  }

  async ngOnInit() {
    const defaultKeyPairValue = await this.global.language.management.getDefaultKeyPairValueList();
    this.defaultLanguageKeyPairValue = defaultKeyPairValue;
  }

  public async onClickCell(clickEvent: CellClickEvent) {
    let newSelected: PairNameValueType = clickEvent.dataItem;
    this.selected = newSelected;
    await this.popoverCtrl.dismiss({ selected: this.selected });
  }

  public onQueryChange() {
    const queryParam: string = this.query.toLowerCase();
    const english = this.defaultLanguageKeyPairValue.filter(eng =>
      eng.value.toLowerCase().includes(queryParam)
    );
    const queryResult: PairNameValueType[] = this.queryParamList
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

    this.gridData = this.allToFirstIndex(queryResult);
  }

  allToFirstIndex(result: PairNameValueType[]) {
    let isAllExisted: boolean = result.filter(r => r.name === 'label.title.all').length > 0;

    if (isAllExisted) {
      result = result.filter(r => r.name !== 'label.title.all');
      result.unshift({ name: 'label.title.all', value: '' });
    }
    return result;
  }
}
