import { RoleDescriptionType } from '../..';

export interface RoleConfigurationType {
  id: string;
  name: string;
  description: RoleDescriptionType;
  accessLevel: RoleAccessLevelType;
  rate: number;
}

export interface RoleAccessLevelType {
  isSystemAdmin: boolean;
  isAdmin: boolean;
  isManager: boolean;
  isEmployee: boolean;
  isReception: boolean;
}
