import { Injectable } from '@angular/core';
import { CheckInClientService } from './check-in-client/check-in-client.service';
import { OneTimeCheckinUrlService } from '../internal-api/one-time-checkin-url/one-time-checkin-url.service';
import { BehaviorSubject } from 'rxjs';
import { ShopOneTimeCheckInUrl } from 'src/app/interface';
import { Router } from '@angular/router';
import { ToastService } from '../global/toast/toast.service';
import { CheckInShopService } from './check-in-shop/check-in-shop.service';

@Injectable({
  providedIn: 'root',
})
export class CheckInService {
  private _checkInSession = new BehaviorSubject<ShopOneTimeCheckInUrl | null>(null);
  public checkInSession$ = this._checkInSession.asObservable();
  constructor(
    public client: CheckInClientService,
    public shop: CheckInShopService,
    private _otu: OneTimeCheckinUrlService,
    private _router: Router,
    private _toaster: ToastService
  ) {}

  public completeSession() {
    this._checkInSession.complete();
  }

  public async validateCheckInSession(sessionId: string) {
    const result = await this._otu.getSession(sessionId);
    if (result !== null) {
      this._checkInSession.next(result);
    } else {
      await this.invalidSessionId();
    }
  }

  public async invalidSessionId() {
    await this._toaster.presentError('label.title.accessdeined');
    this._router.navigateByUrl('booking');
  }
}
