import type { Metadata } from "next";
import "./globals.css";
import PublicLayout from "@/layouts/Public";
import PrivateLayout from "@/layouts/Private";
import { ThemeProvider } from "@mui/material";
import theme from "@/themes/default";

export const metadata: Metadata = {
  title: "Online payment system",
  description: "Online payment acceptance system",
};

function Layout({ children }: { children: JSX.Element }) {
  const user = null;

  if (user != null) {
    return <PrivateLayout>{children}</PrivateLayout>;
  }

  return <PublicLayout>{children}</PublicLayout>;
}

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
