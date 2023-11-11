import { RoleConfigurationType } from '../system/role/role.interface';
import { ShopWorkHoursType } from './shop.interface';
import * as Constant from '../../constant/constant';
import { IUserLoginOption, UserSettingType } from '../user/user.interface';
import { NameValuePairType } from '../global/global.interface';

export type EmployeeManagementUsageType = {
  currentActiveUsers: number;
  currentDeactiveUsers: number;
  maximumUsers: number;
};

export type EmployeeManagementEditUserPropType = {
  employee: ShopEmployeeManagementUserType;
  isReadOnly: boolean;
};

export type EmployeeManagementRolePropType = {
  role: RoleConfigurationType[];
  filter: NameValuePairType[];
};

export type ShopEmployeeManagementUserType = {
  shopId: string;
  userId: string;
  firstName: string;
  lastName: string;
  loginOption: IUserLoginOption;
  gender: Constant.GenderType;
  role: RoleConfigurationType;
  phoneNumber: string;
  email: string;
  encryptedPassword: string;
  active: boolean;
  activeFrom: string;
  activeTo: string | null;
  displayInSystem: boolean;
  roster: ShopWorkHoursType;
  setting: UserSettingType;
};
