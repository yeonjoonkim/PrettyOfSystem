import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { cloneDeep } from 'lodash-es';
import { ShopPackageServiceType, ShopServiceDocumentType } from 'src/app/interface';

@Component({
  selector: 'app-shop-package-service-popover',
  templateUrl: './shop-package-service-popover.component.html',
  styleUrls: ['./shop-package-service-popover.component.scss'],
})
export class ShopPackageServicePopoverComponent implements OnInit {
  public packageServices: ShopPackageServiceType[] = [];
  public services: ShopServiceDocumentType[] = [];

  constructor(
    private _navParams: NavParams,
    private _popoverCtrl: PopoverController
  ) {}

  async ngOnInit() {
    await this.loadingParam();
  }

  handleService(service: ShopServiceDocumentType, min: number, price: number) {
    const isSelected = this.isSelectedService(service.id, min, price);
    this.packageServices = this.packageServices.filter(s => service.id !== s.id);
    if (isSelected) {
      this.packageServices = this.packageServices.filter(
        s => !(service.id == s.id && s.option.min === min && s.option.price === price)
      );
    } else {
      const newService: ShopPackageServiceType = {
        id: service.id,
        description: service.description,
        title: service.title,
        option: {
          min: min,
          price: price,
        },
      };
      this.packageServices.push(newService);
    }
  }

  isSelectedServiceTitle(serviceId: string) {
    const selected = this.packageServices.filter(s => s.id === serviceId).length > 0;
    return selected;
  }

  isSelectedService(serviceId: string, min: number, price: number) {
    const selected = this.packageServices.find(
      s => s.id === serviceId && s.option.min === min && s.option.price === price
    );
    return selected !== undefined ? true : false;
  }

  public async apply() {
    await this._popoverCtrl.dismiss({ packageServices: this.packageServices });
  }

  private async loadingParam() {
    const packageServicesParam: ShopPackageServiceType[] | undefined =
      this._navParams.get('packageServices');
    const servicesParam: ShopServiceDocumentType[] | undefined = this._navParams.get('services');
    if (packageServicesParam !== undefined && servicesParam !== undefined) {
      this.packageServices = cloneDeep(packageServicesParam);
      this.services = cloneDeep(servicesParam);
    } else {
      await this._popoverCtrl.dismiss();
    }
  }
}
