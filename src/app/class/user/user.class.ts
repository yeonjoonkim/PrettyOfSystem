// import {
//   GenderType,
//   IUser,
//   IUserLoginOption,
//   UserAssociatedShopType,
//   UserSettingType,
// } from 'src/app/interface';
// export class User implements IUser {
//   private _id: string;
//   private _firstName: string;
//   private _lastName: string;

//   private _currentShopId: string;
//   private _associatedShops: UserAssociatedShopType[];
//   private _setting: UserSettingType;
//   private _phoneNumber: string;
//   private _email: string;
//   private _loginOption!: IUserLoginOption;
//   private _encryptedPassword!: string;
//   private _isSystemAdmin: boolean;
//   private _disabledAccount: boolean;

//   constructor(user: IUser) {
//     this._id = user.id;
//     this._isSystemAdmin = user.isSystemAdmin;
//     this._currentShopId = user.currentShopId;
//     this._associatedShops = user.associatedShops;
//     this._setting = user.setting;
//     this._phoneNumber = user.phoneNumber;
//     this._email = user.email;
//   }
//   firstName: string;
//   lastName: string;
//   gender: GenderType;
//   currentShopId: string;
//   disabledAccount: boolean;
//   get loginOption(): IUserLoginOption {
//     return this._loginOption;
//   }
//   get encryptedPassword(): string {
//     return this._encryptedPassword;
//   }
//   get id(): string {
//     return this._id;
//   }

//   get isSystemAdmin(): boolean {
//     return this._isSystemAdmin;
//   }

//   get associatedShops(): UserAssociatedShopType[] {
//     return this._associatedShops;
//   }

//   get setting(): UserSettingType {
//     return this._setting;
//   }

//   get phoneNumber(): string {
//     return this._phoneNumber;
//   }

//   get email(): string {
//     return this._email;
//   }

//   public async logout() {}

//   public async update(user: IUser) {}
// }
