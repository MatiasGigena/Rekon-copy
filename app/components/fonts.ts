import { Montserrat, Inter } from "next/font/google";
import localFont from "@next/font/local";

export const BrsonmediaBlack = localFont({ src: "../../public/fonts/BRSonoma-Black.ttf" });
export const BrsonmediaBold = localFont({ src: "../../public/fonts/BRSonoma-Bold.ttf" });
export const BrsonmediaExtraLight = localFont({ src: "../../public/fonts/BRSonoma-ExtraLight.ttf" });
export const BrsonmediaLight = localFont({ src: "../../public/fonts/BRSonoma-Light.ttf" });
export const BrsonmediaMedium = localFont({ src: "../../public/fonts/BRSonoma-Medium.ttf" });
export const BrsonmediaRegular = localFont({ src: "../../public/fonts/BRSonoma-Regular.ttf" });
export const BrsonmediaSemibold = localFont({ src: "../../public/fonts/BRSonoma-SemiBold.ttf" });
export const BrsonmediaThin = localFont({ src: "../../public/fonts/BRSonoma-Thin.ttf" });

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
