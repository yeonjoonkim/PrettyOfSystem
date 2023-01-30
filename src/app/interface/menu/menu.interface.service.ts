export interface IMenuCategory{
  id?: string;
  name: string;
  description: string;
  icon: string;
  content: IMenuContent[];
}

export interface IMenuContent{
  id?: string;
  index: number;
  name: string;
  description: string;
  url: string;
  icon: string;
}
