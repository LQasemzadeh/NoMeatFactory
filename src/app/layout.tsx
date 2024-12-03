import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "glightbox/dist/css/glightbox.css";
import TopBar from "@/app/Components/TopBar";
import Navbar from "@/app/Components/Navbar";

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
    weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "NoMeatFactory",
  description: "Generated by Ladan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={playfair.className}
      >
      <TopBar />
      <Navbar />
        {children}
      </body>
    </html>
  );
}
