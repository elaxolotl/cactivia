import { Geist, Geist_Mono } from "next/font/google";
import { Chewy } from "next/font/google";
import Link from "next/link";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const chewy = Chewy({
  variable: "--font-chewy",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Cactivia",
  description: "Medicie for the cochineal insect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${chewy.variable}`}>{children}
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </body>
    </html>
  );
}
