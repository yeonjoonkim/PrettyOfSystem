import { IRoleAccessLevel } from './../system/role/role.interface';

export interface IMenuCategory {
  id?: string;
  name: string;
  description: string;
  icon: string;
  content: IMenuContent[];
  accessLevel: IRoleAccessLevel;
}

export interface IMenuContent {
  name: string;
  description: string;
  url: string;
  icon: string;
}
