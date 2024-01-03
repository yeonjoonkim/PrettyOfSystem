import { Injectable } from '@angular/core';
import { PrivateHealthInsuranceListService } from './private-health-insurance-list/private-health-insurance-list.service';
import { NameValuePairType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class PrivateHealthInsuranceService {
  list!: NameValuePairType[];
  defaultCompany!: NameValuePairType;
  constructor(private _list: PrivateHealthInsuranceListService) {
    this.list = this._list.get();
    this.defaultCompany = this._list.defaultInsuranceCompany();
  }
}
