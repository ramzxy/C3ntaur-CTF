import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth"; // Fixed path
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from 'react-hot-toast';
import { prisma } from "@/lib/prisma";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const config = await prisma.siteConfig.findFirst({
    where: {
      key: "site_title"
    }
  });

  return {
    title: config?.value || "Orbital CTF",
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
      <body className={`${inter.className} ${roboto.className} ${roboto_mono.className} text-white`}>
        <Providers session={session}>
          <Navbar />
          <main>{children}</main>
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
