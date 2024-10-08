import { Inter } from "next/font/google";
import "./globals.css";
import Headertop from "@/components/Headertop";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";
import MobNavbar from "@/components/MobNavbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopeasy:)",
  description: "Let's shop easy way...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Headertop/>
        <HeaderMain/>
        <Navbar/>
        <MobNavbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
