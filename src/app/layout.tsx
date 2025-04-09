import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth"; // Fixed path
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orbital CTF",
  description: "Capture The Flag Platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Providers session={session}>
          <Navbar />
          <main>{children}</main>
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
