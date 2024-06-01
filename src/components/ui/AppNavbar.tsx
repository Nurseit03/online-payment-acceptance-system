import { IRoute } from "@/routes/data";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import { Box } from "@mui/material";
import Button from "./Button";

interface IAppNavbarProps extends DrawerProps {
  type: "private" | "public";
  routes: IRoute[];
}

export default function AppNavbar({ children, type, routes }: IAppNavbarProps) {
  return (
    <Box>
      {routes.map((route) => (
        <Button>{route.title}</Button>
      ))}
      {children}
    </Box>
  );
}
