import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth"; // Fixed path
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { SiteConfigProvider } from "@/components/SiteConfigProvider";
import { Toaster } from 'react-hot-toast';
import { prisma } from "@/lib/prisma";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const config = await prisma.siteConfig.findFirst();
  
  return {
    title: config?.siteTitle || "Orbital CTF",
    description: "Capture The Flag Platform",
  };
}

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
          <SiteConfigProvider>
            <Navbar />
            <main className="pt-16">{children}</main>
            <Toaster position="top-center" />
          </SiteConfigProvider>
        </Providers>
      </body>
    </html>
  );
}
