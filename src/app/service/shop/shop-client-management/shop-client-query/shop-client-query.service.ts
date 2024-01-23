import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatestWith, map, of, switchMap, take } from 'rxjs';
import { ShopClientManagementUserType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
import { ShopService } from '../../shop.service';
import { ClientCredentialRepositoryService } from 'src/app/firebase/user-repository/client-credential-repository/client-credential-repository.service';

const allGender = [Constant.Default.Gender.Female, Constant.Default.Gender.Male, Constant.Default.Gender.Other];

@Injectable({
  providedIn: 'root',
})
export class ShopClientQueryService {
  private _pageSize = new BehaviorSubject<25 | 50 | 100 | 200>(25);
  private _loaded = new BehaviorSubject<boolean>(false);

  //Selection
  private _selectedClients = new BehaviorSubject<ShopClientManagementUserType[]>([]);

  //Query
  private _firstNameQuery = new BehaviorSubject<string>('');
  private _lastNameQuery = new BehaviorSubject<string>('');
  private _genderQuery = new BehaviorSubject<Constant.GenderType[]>(allGender);
  private _phoneNumberQuery = new BehaviorSubject<string>('');
  private _emailQuery = new BehaviorSubject<string>('');

  public firstNameQuery$ = this._firstNameQuery.asObservable();
  public lastNameQuery$ = this._lastNameQuery.asObservable();
  public phoneNumberQuery$ = this._phoneNumberQuery.asObservable();
  public genderQuery$ = this._genderQuery.asObservable();
  public emailQuery$ = this._emailQuery.asObservable();

  public selectedClients$ = this._selectedClients.asObservable();
  public loaded$ = this._loaded.asObservable();
  public loading$ = this.loaded$.pipe(map(load => !load));
  public pageSize$ = this._pageSize.asObservable();

  get pageSize() {
    return this._pageSize.getValue();
  }

  set pageSize(value: 25 | 50 | 100 | 200) {
    this._pageSize.next(value);
  }

  get firstNameParam() {
    return this._firstNameQuery.getValue();
  }

  set firstNameParam(param: string) {
    this._firstNameQuery.next(param);
  }

  get lastNameParam() {
    return this._lastNameQuery.getValue();
  }

  set lastNameParam(param: string) {
    this._lastNameQuery.next(param);
  }

  get loaded() {
    return this._loaded.getValue();
  }

  set loaded(value: boolean) {
    this._loaded.next(value);
  }

  get genderParam() {
    const value = this._genderQuery.getValue();
    const isAllGender = value.length > 2;
    return isAllGender ? Constant.Default.Gender.All : value[0];
  }

  set genderParam(value: Constant.GenderType) {
    const param = value === Constant.Default.Gender.All ? allGender : [value];
    this._genderQuery.next(param);
  }

  get phoneNumberParam() {
    return this._phoneNumberQuery.getValue();
  }

  set phoneNumberParam(param: string) {
    this._phoneNumberQuery.next(param);
  }

  get emailParam() {
    return this._emailQuery.getValue();
  }

  set emailParam(param: string) {
    this._emailQuery.next(param);
  }

  get selectedClients() {
    return this._selectedClients.getValue();
  }

  set selectedClients(value: ShopClientManagementUserType[]) {
    this._selectedClients.next(value);
  }

  public queryResult$ = this._shop.config$.pipe(
    switchMap(config => {
      if (config !== null) {
        return this._clientRepo.getClientsByQuery(
          config.id,
          this.firstNameParam,
          this.lastNameParam,
          this.genderParam,
          this.emailParam,
          this.phoneNumberParam
        );
      } else {
        return of([]);
      }
    })
  );

  constructor(
    private _shop: ShopService,
    private _clientRepo: ClientCredentialRepositoryService
  ) {}

  public resetParam() {
    this.firstNameParam = '';
    this.lastNameParam = '';
    this.genderParam = Constant.Default.Gender.All;
    this.phoneNumberParam = '';
    this.emailParam = '';
  }

  public completed() {
    this._selectedClients.complete();
    this._firstNameQuery.complete();
    this._lastNameQuery.complete();
    this._genderQuery.complete();
    this._phoneNumberQuery.complete();
    this._emailQuery.complete();
    this._loaded.complete();
  }

  public async reset() {
    this.resetParam();
    await this.refresh();
  }

  public async refresh() {
    this.loaded = false;
    this.queryResult$.pipe(take(1)).subscribe(clients => {
      this.selectedClients = clients;
      this.loaded = true;
    });
  }

  public async applyFilter() {
    await this.refresh();
  }
}
