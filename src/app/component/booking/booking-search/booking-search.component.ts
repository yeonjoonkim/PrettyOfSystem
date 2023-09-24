import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/service/global/global.service';
import { PostcodeService } from '../../form/address/service/postcode-service.service';
import { PostCodeItemType } from 'src/app/interface';

type IndexedFilterType = Record<string, PostCodeItemType[]>;
@Component({
  selector: 'booking-search',
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.scss'],
})
export class BookingSearchComponent implements OnInit, OnDestroy {
  @Output() onQueryChange = new EventEmitter<PostCodeItemType>();
  public isActive: boolean = false;
  public loading: boolean = false;
  public placeholder: string = '';
  public autoCompleteSearchFilter: string[] = [];
  private _initPlaceholder: string = '';
  private _queryFilter: PostCodeItemType[] = [];
  private _indexedFilter!: IndexedFilterType;
  private _displayOption: string[] = ['SUNNY BANK', 'CHERMSIDE'];
  private _index = 0;
  private _interval: any;

  constructor(private _global: GlobalService, private _postCode: PostcodeService) {
    this._queryFilter = this._postCode.getAustralia();
    this._indexedFilter = this._queryFilter.reduce<IndexedFilterType>((index, au) => {
      const key = `${au.suburb.replace(/\s+/g, '').toUpperCase()}${au.postCode}`; // Create compound key
      if (!index[key]) {
        index[key] = []; // Initialize the array if it doesn’t exist
      }
      index[key].push(au);
      return index;
    }, {} as IndexedFilterType);
  }

  async ngOnInit() {
    await this.setStartPlaceholder();
    setTimeout(() => {
      this.toggleActive();
      setTimeout(() => {
        this.startDisplayAction();
      }, 1000);
    }, 500);
  }

  async ngOnDestroy() {
    clearInterval(this._interval);
  }

  public toggleActive() {
    this.isActive = true;
  }

  private async setStartPlaceholder() {
    const init = 'placeholder.description.searchcatchphrase';
    this.placeholder = (await this._global.language.transform(init)) + '..';
    this._initPlaceholder = this.placeholder;
  }

  private async startDisplayAction() {
    setTimeout(() => {
      this.placeholder = '';
      this.changeDisplayPlaceholder();
    }, 3000);
  }

  public changeDisplayPlaceholder() {
    this._interval = setInterval(() => {
      const completed = this.placeholder.length === this._displayOption[this._index].length;
      const finalised = completed && this._index === 1;

      if (!completed && !finalised) {
        this.placeholder =
          this.placeholder + this._displayOption[this._index][this.placeholder.length];
      }
      if (completed && !finalised) {
        this._index = 1;
        this.startDisplayAction();
        clearInterval(this._interval);
      }

      if (finalised) {
        clearInterval(this._interval);
        setTimeout(() => {
          this.placeholder = this._initPlaceholder;
        }, 3000);
      }
    }, 100);
  }

  public onTyping(filter: string) {
    clearInterval(this._interval);
    this.placeholder = this._initPlaceholder;

    if (filter.length > 2) {
      const param = filter.replace(/\s+/g, '').toUpperCase();
      const keys = Object.keys(this._indexedFilter);
      const matchingKeys = keys.filter(key => key.includes(param));
      this.loading = true;

      this.autoCompleteSearchFilter = [];
      matchingKeys.forEach(key => {
        this._indexedFilter[key].forEach(item => {
          this.autoCompleteSearchFilter.push(item.suburb + ' ' + item.postCode);
        });
      });

      this.loading = false;
    }
  }

  public valueChange(selected: string) {
    const param = selected.replace(/\s+/g, '').toUpperCase();
    const selection = this._indexedFilter[param];
    if (selection !== undefined) {
      const selected = selection[0];
      this.onQueryChange.emit(selected);
    }
  }
}
