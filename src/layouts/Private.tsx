import AppNavbar from "@/components/ui/AppNavbar";
import Footer from "@/components/ui/Footer";
import { routes } from "@/routes/guest";


export default function PrivateLayout({ children }: { children: JSX.Element }) {
  return (
    <AppNavbar type="private" routes={routes}>
      {children}
      <Footer />
    </AppNavbar>
  );
}
