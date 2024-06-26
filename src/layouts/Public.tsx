import AppNavbar from "@/components/ui/AppNavbar";
import Footer from "@/components/ui/Footer";
import { routes } from "@/routes/guest";


export default function PublicLayout({ children }: { children: JSX.Element }) {
  return (
    <AppNavbar type="public" routes={routes}>
      {children}
      <Footer />
    </AppNavbar>
  );
}
