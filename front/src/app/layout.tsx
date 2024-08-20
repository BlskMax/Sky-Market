import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { CartProvider } from "@/context/cartContext";
import { UserProvider } from "@/context/userContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ComiCraft",
  description: "ComiCraft: All The Tropes!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body>
      <UserProvider>
      <CartProvider>
      <Navbar />
      <div className={inter.className}>{children}</div>
      <Footer />
      </CartProvider>
      </UserProvider>
      </body>
    </html>
  );
}
