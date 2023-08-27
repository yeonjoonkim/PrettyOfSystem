import { IUser, IUserAssociatedShop, IUserSetting } from 'src/app/interface';
export class User implements IUser {
  private _id: string;
  private _firstName: string;
  private _lastName: string;
  private _isSystemAdmin: boolean;
  private _currentShop: IUserAssociatedShop | null;
  private _associatedShops: IUserAssociatedShop[];
  private _setting: IUserSetting;
  private _loginIds: string[];
  private _phoneNumber: string;
  private _email: string;

  constructor(user: IUser) {
    this._id = user.id;
    this._firstName = user.firstName;
    this._lastName = user.lastName;
    this._isSystemAdmin = user.isSystemAdmin;
    this._currentShop = user.currentShop;
    this._associatedShops = user.associatedShops;
    this._setting = user.setting;
    this._loginIds = user.loginIds;
    this._phoneNumber = user.phoneNumber;
    this._email = user.email;
  }

  get id(): string {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  get isSystemAdmin(): boolean {
    return this._isSystemAdmin;
  }

  get currentShop(): IUserAssociatedShop | null {
    return this._currentShop;
  }

  get associatedShops(): IUserAssociatedShop[] {
    return this._associatedShops;
  }

  get setting(): IUserSetting {
    return this._setting;
  }

  get loginIds(): string[] {
    return this._loginIds;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  get email(): string {
    return this._email;
  }

  public async logout() {}

  public async update(user: IUser) {}
}
