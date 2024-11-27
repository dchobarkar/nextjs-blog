import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";

import Navbar from "./ui/navbar/Navbar";
import Footer from "./ui/footer/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "DarshanWebDev Blog",
  description: "This is a trial blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
