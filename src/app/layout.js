import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Client } from "@/redux/provider/Client";
import { Toaster } from "sonner";
import Header from "@/components/comman/Header";
import Footer from "@/components/comman/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jewellery walla",
  description:
    "A Elegant Jewellery Shop For Men and Women | Premium Quality | Unique Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Client>
          <Toaster />
          <Header />
          {children}
          {/* <Footer /> */}
        </Client>
      </body>
    </html>
  );
}
