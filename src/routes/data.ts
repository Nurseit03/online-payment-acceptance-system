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

export const getRoutes = (
  routeList: IRoute[],
  type?: IRoute["type"] | "rendered",
  role?: IChildRoute["role"],
  rootOnly: boolean = false
): IRoute[] => {
  if (type == null) {
    return routeList;
  }

  return routeList?.reduce((acc: IRoute[], val: IRoute) => {
    if (role != null && val.role != null && role !== val.role) return acc;

    if (rootOnly && val.children != null) {
      val.children.map((item) => {
        if (
          (role == null || val.role == null || role === val.role) &&
          (type == null || type === "rendered" || type === item.type)
        )
          acc.push(item);
      });
    } else {
      const childRoutes = val.children?.filter(
        (item) =>
          (role == null || item.role == null || role === item.role) &&
          (type == null || type === "rendered" || type === item.type)
      );
      const route = { ...val, children: childRoutes };

      if (
        (role == null || val.role == null || role === val.role) &&
        (type == null || type === "rendered" || type === val.type)
      )
        acc.push(route);
    }

    return acc;
  }, []);
};
