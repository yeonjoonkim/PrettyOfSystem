import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ShopConfigurationType, ShopOperatingHoursType } from 'src/app/interface';
import { BookingService } from 'src/app/service/booking/booking.service';

@Component({
  selector: 'shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss'],
})
export class ShopCardComponent implements OnInit, OnChanges {
  @Input() shop!: ShopConfigurationType;

  public isAvailableNow: boolean = false;
  public today!: ShopOperatingHoursType;
  public logo: boolean = false;
  public picture1: boolean = false;
  public picture2: boolean = false;
  public picture3: boolean = false;
  public images!: Array<{ url: string }>;

  constructor(private _booking: BookingService) {}

  ngOnChanges(changes: SimpleChanges) {
    const shopChange = changes['shop'];
    if (shopChange !== undefined) {
      this.images = [
        { url: this.shop.setting.picture.shopImage1 },
        { url: this.shop.setting.picture.shopImage2 },
        { url: this.shop.setting.picture.shopImage3 },
      ];
      this.isAvailableNow = this._booking.isOpenNow(this.shop);
      this.today = this._booking.getTodayTimeItem(this.shop);
    }
  }

  ngOnInit() {}

  onImageLoad(url: string) {
    const image = this.images.find(img => img.url === url);
    if (image) {
      const index = this.images.findIndex(img => img.url === url);
      this.picture1 = image !== undefined && index === 0 ? true : this.picture1;
      this.picture2 = image !== undefined && index === 1 ? true : this.picture1;
      this.picture3 = image !== undefined && index === 2 ? true : this.picture1;
    }
  }

  imageloaded() {
    return this.picture1 && this.picture2 && this.picture3;
  }
}
