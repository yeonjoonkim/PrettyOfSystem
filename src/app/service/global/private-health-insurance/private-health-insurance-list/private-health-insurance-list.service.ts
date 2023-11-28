import { Injectable } from '@angular/core';
import { NameValuePairType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class PrivateHealthInsuranceListService {
  private _list: string[] = [
    'Ahm',
    'AIA',
    'Apia',
    'Australian Unity',
    'BUPA',
    'Frank',
    'GMHBA',
    'HBF',
    'HCF',
    'Health Insurance Fund of Australia',
    'Hunter Health Insurance',
    'Latrobe Health Services',
    'Medibank',
    'Mildura Health Fund',
    'NIB',
    'Onemedifund',
    'Peoplecare',
    'Phoenix Health Fund',
    'Qantas Health Insurance',
    'RT health',
    'Westfund Health Insurance',
  ];
  constructor() {}

  public get() {
    return this._list.map(comp => {
      return { name: comp, value: comp } as NameValuePairType;
    });
  }
}
