import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//------------------------------------------------------
import { GoogleOAuthProvider } from "@react-oauth/google";
//------------------------------------------------------
import NavBar from "./components/layout/navbar/NavBar";
import Header from "./components/layout/header/Header";
import Profile from "./components/profile/Profile";
import PageLoad from "./components/pageLoad/PageLoad";
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
          {/** Your Client ID: EXAMPLE */}
          <GoogleOAuthProvider clientId="831468581736-ibg90kdie9i4fajhp3pfj96rpbfn3l3c.apps.googleusercontent.com">
            <Header/>
            <NavBar/>
            <div className="content layout_right">
              {children}
            </div>
            <Profile/>
            <PageLoad/>
          </GoogleOAuthProvider>
      </body>
    </html>
  );
};