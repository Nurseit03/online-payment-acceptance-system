import { IRoute } from "@/routes/data";
import Drawer, { DrawerProps } from "@mui/material/Drawer";

interface IAppNavbarProps extends DrawerProps {
  type: "private" | "public";
  routes: IRoute[];
}

const AppNavbar: React.FC<IAppNavbarProps> = ({children, type,  routes }) => {
  return <>AppNavbar</>;
};

export default AppNavbar;
