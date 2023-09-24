import { Component, OnInit } from '@angular/core';
import { BookingQueryCriteria, PostCodeItemType } from 'src/app/interface';

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
    category: {
      id: '',
      isHairSalon: false,
      isMassageTheraphy: true,
      isPersonalTrainning: false,
      isSkinCare: false,
      isMobileShop: false,
      name: '',
    },
  };
  constructor() {}

  ngOnInit() {}

  public async onAddressQuery(query: PostCodeItemType) {
    this.query.address = query;
  }
}
