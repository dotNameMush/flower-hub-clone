export interface IRoute {
  key?: string;
  path?: string;
  component: any;
  children?: IRoute[];
}
