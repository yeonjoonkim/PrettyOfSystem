import { RoleAccessLevelType } from './../system/role/role.interface';

export type MenuCategoryType = {
  id?: string;
  name: string;
  description: string;
  icon: string;
  content: MenuContentType[];
  accessLevel: RoleAccessLevelType;
};

export type MenuContentType = {
  name: string;
  description: string;
  url: string;
  icon: string;
};
