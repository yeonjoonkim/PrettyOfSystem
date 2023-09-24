import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { CellClickEvent } from '@progress/kendo-angular-grid';
import { NameValuePairType } from 'src/app/interface';

@Component({
  selector: 'booking-language-dropdown-list',
  templateUrl: './booking-language-dropdown-list.component.html',
  styleUrls: ['./booking-language-dropdown-list.component.scss'],
})
export class BookingLanguageDropDownListComponent implements OnInit {
  public gridData: NameValuePairType[] = [];
  public selection: NameValuePairType[] = [];
  public selected!: NameValuePairType | undefined;
  public filterable: boolean = false;
  public query: string = '';
  public maxHeight: string = '150px';

  public rowClass = (args: { dataItem: { value: string | undefined } }) => ({
    'k-selected': args.dataItem?.value === this?.selected?.value,
  });

  constructor(private _navParams: NavParams, private _popoverCtrl: PopoverController) {
    this.selection = this._navParams.get('selection');
    this.gridData = this.selection;
    this.selected = this._navParams.get('selected');
    this.filterable = this._navParams.get('filterable');
    this.maxHeight = this._navParams.get('maxHeight');
    this.maxHeight = this.maxHeight.includes('px') ? this.maxHeight : this.maxHeight + 'px';
  }

  async ngOnInit() {}

  public async onClickCell(clickEvent: CellClickEvent) {
    let newSelected: NameValuePairType = clickEvent.dataItem;
    this.selected = newSelected;
    await this._popoverCtrl.dismiss({ selected: this.selected });
  }

  public onQueryChange() {
    const queryParam = this.query.toLowerCase();
    const queryResult: NameValuePairType[] = this.selection.filter(
      q => q.value.toLowerCase().includes(queryParam) || q.name?.toLowerCase()?.includes(queryParam)
    );

    this.gridData = queryResult;
  }
}
