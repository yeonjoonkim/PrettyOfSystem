export interface IMenuCategory{
  id?: string;
  name: string;
  description: string;
  icon: string;
  content: IMenuContent[];
}

export interface IMenuContent{
  name: string;
  description: string;
  url: string;
  icon: string;
}
