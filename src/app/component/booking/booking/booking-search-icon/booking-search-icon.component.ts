import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as Constant from 'src/app/constant/constant';
import { NameValuePairType } from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
@Component({
  selector: 'booking-search-icon',
  templateUrl: './booking-search-icon.component.html',
  styleUrls: ['./booking-search-icon.component.scss'],
})
export class BookingSearchIconComponent implements OnInit {
  @Output() shopCategoryNameChange = new EventEmitter<Constant.BookingSearchIconType>();
  @Input()
  get shopCategoryName() {
    return this.selectedShopCategoryName;
  }
  set shopCategoryName(value: Constant.BookingSearchIconType) {
    this.selectedShopCategoryName = value;
    this.shopCategoryNameChange.emit(this.selectedShopCategoryName);
  }

  public selectedShopCategoryName: Constant.BookingSearchIconType =
    Constant.BookingSearchIconType.MassageTheraphy;

  public selection: NameValuePairType[] = [
    {
      name: Constant.BookingSearchIconType.MassageTheraphy,
      value: 'assets/booking-search/booking-search-massage-icon.svg',
    },
    {
      name: Constant.BookingSearchIconType.NailArt,
      value: 'assets/booking-search/booking-search-nail-icon.svg',
    },
    {
      name: Constant.BookingSearchIconType.SkinCare,
      value: 'assets/booking-search/booking-search-skincare-icon.svg',
    },
  ];

  public selected: NameValuePairType = {
    name: Constant.BookingSearchIconType.MassageTheraphy,
    value: 'assets/booking-search/booking-search-massage-icon.svg',
  };

  constructor(private _global: GlobalService) {}

  ngOnInit() {}

  private async preparingToaster() {
    const msg = await this._global.language.transform(
      'messagesuccess.description.servicepreparing'
    );
    await this._global.toast.present(msg);
  }

  public async onChangeIcon(selected: NameValuePairType) {
    if (selected.name !== Constant.BookingSearchIconType.MassageTheraphy) {
      await this.preparingToaster();
    } else {
      this.shopCategoryName = this.selected.name as Constant.BookingSearchIconType;
    }
  }

  public isActive(name: string) {
    return this.selected.name === name;
  }
}
