import { Injectable } from '@angular/core';
import { NameValuePairType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class UserSettingButtonService {
  private name = {
    massage: 'label.title.massage',
  };
  constructor() {}

  public sms(): NameValuePairType {
    return { value: 'SMS', name: 'SMS' };
  }

  public massage(): NameValuePairType {
    return { value: 'Massage', name: this.name.massage };
  }

  list() {
    return [this.massage(), this.sms()];
  }
}
