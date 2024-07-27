import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/common/components/Layout/Header";
import Footer from "@/common/components/Layout/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
