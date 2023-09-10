import { Component, OnChanges, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { CellClickEvent, RowClassArgs } from '@progress/kendo-angular-grid';
import { IPairNameValue, IPairNameValueFilterParam } from 'src/app/interface';

@Component({
  selector: 'name-pair-value-dropdown-list',
  templateUrl: './name-pair-value-dropdown-list.component.html',
  styleUrls: ['./name-pair-value-dropdown-list.component.scss'],
})
export class NamePairValueDropdownlistComponent implements OnInit {
  public gridData: IPairNameValue[] = [];
  public selection: IPairNameValue[] = [];
  public queryParamList: IPairNameValueFilterParam[] = [];
  public selected: IPairNameValue = { name: '', value: '' };
  public filterable: boolean = false;
  public query: string = '';
  public maxHeight: string = '150px';

  public rowClass = (args: { dataItem: { value: string } }) => ({
    'k-selected': args.dataItem.value === this.selected.value,
  });

  constructor(private navParams: NavParams, private popoverCtrl: PopoverController) {
    this.queryParamList = this.navParams.get('queryParams');
    this.selection = this.navParams.get('selection');
    this.gridData = this.selection;
    this.selected = this.navParams.get('selected');
    this.filterable = this.navParams.get('filterable');
    this.maxHeight = this.navParams.get('maxHeight');
    this.maxHeight = this.maxHeight.includes('px') ? this.maxHeight : this.maxHeight + 'px';
  }

  ngOnInit() {}

  public async onClickCell(clickEvent: CellClickEvent) {
    let newSelected: IPairNameValue = clickEvent.dataItem;
    this.selected = newSelected;
    await this.popoverCtrl.dismiss({ selected: this.selected });
  }

  public onQueryChange() {
    const qeuryParam: string = this.query.toLowerCase();
    const queryResult: IPairNameValue[] = this.queryParamList
      .filter(q => q.translatedName.toLowerCase().includes(qeuryParam))
      .sort((a, b) => a.translatedName.localeCompare(b.translatedName))
      .map(q => {
        return { name: q.name, value: q.value };
      });
    this.gridData = this.allToFirstIndex(queryResult);
  }

  allToFirstIndex(result: IPairNameValue[]) {
    let isAllExisted: boolean = result.filter(r => r.name === 'label.title.all').length > 0;

    if (isAllExisted) {
      result = result.filter(r => r.name !== 'label.title.all');
      result.unshift({ name: 'label.title.all', value: '' });
    }
    return result;
  }
}
