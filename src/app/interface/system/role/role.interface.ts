import { IMenuCategory } from "../../menu/menu.interface";

export interface IRoleConfiguration{
  name: string;
  description: string;
  isSystemAdmin: boolean;
  isAdmin: boolean;
  isManager: boolean;
  isEmployee: boolean;
  isReception: boolean;
  rate: number;
  menuConfig: IMenuCategory[];
}
