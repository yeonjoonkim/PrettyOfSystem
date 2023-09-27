import { Component, OnInit } from '@angular/core';
import { BookingQueryCriteria, PostCodeItemType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  public query: BookingQueryCriteria = {
    address: {
      postCode: '',
      suburb: '',
    },
    shopCategoryName: Constant.BookingSearchIconType.MassageTheraphy,
  };
  constructor() {}

  ngOnInit() {}

  public async onAddressQuery(query: PostCodeItemType) {
    this.query.address = query;
    this.query = this.query;
  }
}
