import AppNavbar from "@/components/ui/AppNavbar";
import Footer from "@/components/ui/Footer";
import { routes } from "@/routes/guest";
import { getRoutes } from "@/routes/data";

const guestRoutes = getRoutes(routes, "menu", "user", true);

export default function PublicLayout({ children }: { children: JSX.Element }) {
  return (
    <AppNavbar type="public" routes={guestRoutes}>
      {children}
      <Footer />
    </AppNavbar>
  );
}
