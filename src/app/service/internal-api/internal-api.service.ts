import { Injectable } from '@angular/core';
import { OneTimeCheckinUrlService } from './one-time-checkin-url/one-time-checkin-url.service';

@Injectable({
  providedIn: 'root',
})
export class InternalApiService {
  constructor(private _oneTimeCheckInUrl: OneTimeCheckinUrlService) {}

  public async handler(url: string) {
    const isURLGenerator = url.includes('internal-api/otu');
    if (isURLGenerator) {
      const result = await this.oneTimeCheckInUrlHandler(url);
      if (result !== null) {
        document.location.replace(result);
      } else {
        document.location.replace('/booking');
      }
    } else {
      document.location.replace('/booking');
    }
  }

  private async oneTimeCheckInUrlHandler(url: string) {
    const isURLGenerator = url.includes('internal-api/otu');
    if (isURLGenerator) {
      const segement = url.split('/');
      const param = segement[segement.length - 1];
      if (param) {
        const url = await this._oneTimeCheckInUrl.getUrl(param);
        if (url !== null) {
          return `check-in/${url}`;
        } else {
          return null;
        }
      }
    }
    return null;
  }
}
