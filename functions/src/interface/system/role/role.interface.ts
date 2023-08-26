export interface IRoleConfiguration {
  id: string;
  name: string;
  description: string;
  accessLevel: IRoleAccessLevel;
  rate: number;
}

export interface IRoleAccessLevel {
  isSystemAdmin: boolean;
  isAdmin: boolean;
  isManager: boolean;
  isEmployee: boolean;
  isReception: boolean;
}
