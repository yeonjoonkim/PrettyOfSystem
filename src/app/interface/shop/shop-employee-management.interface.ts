import { RoleConfigurationType } from '../system/role/role.interface';
import { ShopOperatingDailyType, ShopOperatingHoursType, ShopWorkHoursType } from './shop.interface';
import * as Constant from '../../constant/constant';
import { IUserLoginOption, UserSettingType } from '../user/user.interface';
import { NameValuePairType, StartEndStringDateType } from '../global/global.interface';

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
  dob: string;
  phoneNumber: string;
  email: string;
  encryptedPassword: string;
  active: boolean;
  activeFrom: string;
  activeTo: string | null;
  displayInSystem: boolean;
  roster: ShopWorkHoursType;
  nextWeekRoster: ShopWorkHoursType;
  setting: UserSettingType;
};

export type ShopEmployeeScheduleTimeType = {
  thisWeeks: string[];
  nextWeeks: string[];
  thisWeek: StartEndStringDateType;
  nextWeek: StartEndStringDateType;
  timezone: string;
  shopNow: string;
  operatingHours: ShopWorkHoursType;
};

export type ShopEmployeeScheduleSettingProp = {
  name: string;
  date: string;
  day: string;
  roster: ShopOperatingDailyType;
  operating: ShopOperatingHoursType;
};
