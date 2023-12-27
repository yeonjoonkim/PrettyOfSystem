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
  nextTwoWeekRoster: ShopWorkHoursType;
  nextThreeWeekRoster: ShopWorkHoursType;
  nextFourWeekRoster: ShopWorkHoursType;
  setting: UserSettingType;
};

export type ShopEmployeeScheduleTimeType = {
  thisWeeks: string[];
  nextWeeks: string[];
  twoWeeks: string[];
  threeWeeks: string[];
  fourWeeks: string[];
  thisWeek: StartEndStringDateType;
  nextWeek: StartEndStringDateType;
  twoWeek: StartEndStringDateType;
  threeWeek: StartEndStringDateType;
  fourWeek: StartEndStringDateType;
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
  employeeId: string;
};

export type ShopEmployeeTimeSheet = {
  shopId: string;
  employeeId: string;
  fullName: string;
  gender: Constant.GenderType;
  avaliable: ShopEmployeeTimeSheetAvailableType[];
};

export type ShopEmployeeTimeSheetAvailableType = {
  date: string;
  times: string[];
  start: string | null;
  end: string | null;
  isWorking: boolean;
};
