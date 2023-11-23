import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ShopOneTimeCheckinUrlService } from 'src/app/firebase/shop-repository/shop-one-time-checkin-url/shop-one-time-checkin-url.service';
import { DeviceAddressService } from '../../global/device/device-address/device-address.service';
import { ShopOneTimeCheckInUrlCriteria } from 'src/app/interface';
import { ToastService } from '../../global/toast/toast.service';

@Injectable({
  providedIn: 'root',
})
export class OneTimeCheckinUrlService {
  constructor(
    private _otuRepo: ShopOneTimeCheckinUrlService,
    private _deviceAddress: DeviceAddressService,
    private _toaster: ToastService
  ) {}

  private async getURLCriteria(criteriaId: string) {
    const result = await firstValueFrom(this._otuRepo.getCriteria(criteriaId));
    return result;
  }

  private async createOTU(criteria: ShopOneTimeCheckInUrlCriteria) {
    const ipAddress = await this._deviceAddress.IPv4();
    return await this._otuRepo.createOneTimeUrl(criteria, ipAddress);
  }

  public async getSession(sessionId: string) {
    const ipAddress = await this._deviceAddress.IPv4();
    const session = this._otuRepo.getSession(sessionId, ipAddress);
    return await firstValueFrom(session);
  }

  public async getUrl(criteriaId: string) {
    const criteria = await this.getURLCriteria(criteriaId);
    if (criteria) {
      return await this.createOTU(criteria);
    } else {
      await this._toaster.presentError('Access Deined');
      return null;
    }
  }
}
