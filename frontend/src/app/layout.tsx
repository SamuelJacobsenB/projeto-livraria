import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//------------------------------------------------------
import NavBar from "./components/layout/navbar/NavBar";
import Header from "./components/layout/header/Header";
//------------------------------------------------------
const inter = Inter({ subsets: ["latin"] });
//------------------------------------------------------
export const metadata: Metadata = {
  title: "E-books - Livraria virtual",
  description: "Livraria virtual criada por Samuel Jacobsen",
};
//------------------------------------------------------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>  
          <Header/>
          <NavBar/>
          <div className="content layout_right">
            {children}
          </div>
      </body>
    </html>
  );
};