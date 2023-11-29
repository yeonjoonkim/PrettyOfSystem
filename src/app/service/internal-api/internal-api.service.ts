import { Injectable } from '@angular/core';
import { WaitingListUrlService } from './waiting-list-url/waiting-list-url.service';

enum InternalAPIType {
  WaitingList = 'waiting-list',
}

@Injectable({
  providedIn: 'root',
})
export class InternalApiService {
  constructor(private _waitingList: WaitingListUrlService) {}

  public async handler(url: string) {
    const type = this.getUrlType(url);
    switch (type) {
      case InternalAPIType.WaitingList:
        await this.waitingListUrlHandler(url);
        break;
      default:
        document.location.replace('/booking');
    }
  }

  private async waitingListUrlHandler(url: string) {
    const segement = url.split('/');
    const param = segement[segement.length - 1];

    if (param) {
      const result = await this._waitingList.getUrl(param);
      console.log(result);
      if (result !== null) {
        document.location.replace(`waiting-list/${result}`);
      } else {
        document.location.replace(`/booking`);
      }
    }
  }

  private getUrlType(url: string): InternalAPIType | null {
    const isWaitingList = url.includes('waiting-list');
    return isWaitingList ? InternalAPIType.WaitingList : null;
  }
}
