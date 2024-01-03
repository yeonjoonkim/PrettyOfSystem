import { Injectable } from '@angular/core';
import { MedicalInsuranceType, NameValuePairType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class PrivateHealthInsuranceListService {
  private _list: MedicalInsuranceType[] = [
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
    'Nib',
    'Onemedifund',
    'Peoplecare',
    'Phoenix Health Fund',
    'Qantas Health Insurance',
    'RT Health',
    'Westfund Health Insurance',
  ];
  constructor() {}

  public defaultInsuranceCompany() {
    return {
      name: 'Medibank',
      value: 'Medibank',
    };
  }

  public get() {
    return this._list.map(comp => {
      return { name: comp, value: comp } as NameValuePairType;
    });
  }
}
