"use client";
import { createTheme } from "@mui/material/styles";
import { Open_Sans } from "next/font/google";

enum colors {
  DARK_COLOR = "#161C2D",
}

export const montserrat = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme({
  palette: {
    success: {
      main: "#1BAA75",
    },
    secondary: {
      main: "#3F5984",
    },
    text: {
      primary: "#24334B",
    },
    info: {
      main: "#24334B",
      light: "#3F5984",
    },
    grey: {
      300: "#CDCDCD",
    },
    primary: {
      light: "#E22675",
      main: "#68D585",
      dark: "#161C2D",
      contrastText: "#fff",
    },
  },

  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontSize: "clamp(24px, 3vw, 36px)",
      fontWeight: "900",
    },
    h2: {
      fontSize: "clamp(22px, 3vw, 32px)",
      fontWeight: "800",
      lineHeight: "77px",
    },
    h3: {
      fontSize: "clamp(20px, 3vw, 28px)",
      fontWeight: "700",
      lineHeight: "26.88px",
    },
    h4: {
      fontSize: "clamp(18px, 3vw, 24px)",
      fontWeight: "600",
    },
    h5: {
      fontSize: "clamp(16px, 3vw, 20px)",
      fontWeight: "500",
    },
    h6: {
      fontSize: "clamp(14px, 3vw, 16px)",
      fontWeight: "400",
    },
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
