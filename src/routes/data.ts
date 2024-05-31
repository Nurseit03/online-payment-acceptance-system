export interface IChildRoute {
  title: string;
  link: string;
  type: "link" | "menu";
  role?: "user" | "admin";
  icon?: string;
  bottomDivider?: boolean;
}

export interface IRoute extends Omit<IChildRoute, "type"> {
  type: IChildRoute["type"] | "group";
  children?: IChildRoute[];
}