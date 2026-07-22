import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aquatown – India’s Ultimate Inflatable Water Adventure Park",
  description: "Aquatown is an upcoming inflatable water adventure park in Kadi, Gujarat, featuring giant inflatable obstacles, kids and adult pools, a lazy river, seasonal slides, and India’s first Water Go-Kart experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased font-inter bg-cyan-50 text-slate-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
