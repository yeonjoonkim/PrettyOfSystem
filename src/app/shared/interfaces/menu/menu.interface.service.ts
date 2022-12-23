export interface IMenu{
  icon: string;
  title: string;
  content: Array<IMenuContent>;
}

export interface IMenuContent{
  url: string;
  icon: string;
  title: string;
}
