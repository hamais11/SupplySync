import type { Metadata } from "next";
import { Geist, Geist_Mono , Inter} from "next/font/google";
import "./globals.scss";
import LogoHome from "@/img/logoHome.png";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "SupplySync",
  description: "gestor de Compras",
  icons: {
    icon: "/logoHome.ico",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
         <ThemeProvider attribute="class">
         <Toaster position="top-center" reverseOrder={false} />
         {children}
         </ThemeProvider>
        
      </body>
    </html>
  );
}
