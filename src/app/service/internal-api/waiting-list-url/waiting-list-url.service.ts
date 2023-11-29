import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { WaitingListRepositoryService } from 'src/app/firebase/internal-api-repository/waiting-list-repository/waiting-list-repository.service';
import { DeviceAddressService } from '../../global/device/device-address/device-address.service';
import { ToastService } from '../../global/toast/toast.service';
import { WaitingListCriteriaType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class WaitingListUrlService {
  constructor(
    private _waitingListRepo: WaitingListRepositoryService,
    private _deviceAddress: DeviceAddressService,
    private _toaster: ToastService
  ) {}

  private async getURLCriteria(criteriaId: string) {
    const result = await firstValueFrom(this._waitingListRepo.getCriteria(criteriaId));
    return result;
  }

  private async createSession(criteria: WaitingListCriteriaType) {
    const ipAddress = await this._deviceAddress.IPv4();
    return await this._waitingListRepo.createSession(criteria, ipAddress);
  }

  public async getSession(sessionId: string) {
    const ipAddress = await this._deviceAddress.IPv4();
    const session = this._waitingListRepo.getSession(sessionId, ipAddress);
    return await firstValueFrom(session);
  }

  public async getUrl(criteriaId: string) {
    const criteria = await this.getURLCriteria(criteriaId);
    if (criteria) {
      return await this.createSession(criteria);
    } else {
      await this._toaster.presentError('Access Deined');
      return null;
    }
  }
}
