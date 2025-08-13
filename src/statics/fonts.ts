import { Inter as INTER, Poppins as POPPINS } from "next/font/google";

export const PoppinsFont = POPPINS({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
});

export const InterFont = INTER({
  weight: ["100", "300", "400", "500", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
});