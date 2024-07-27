import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/common/components/Layout/Header";
import Footer from "@/common/components/Layout/Footer";
import Cta from "@/common/components/Layout/Cta";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Cta />
        <Footer />
      </body>
    </html>
  );
}
