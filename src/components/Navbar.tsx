'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useSiteConfig } from "./SiteConfigProvider";

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const { config } = useSiteConfig();

  return (
    <nav className="z-10 fixed w-full bg-black/30 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              {config?.siteTitle || "Orbital CTF"}
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {status === 'authenticated' ? (
              <>
                <Link
                  href="/dashboard"
                  className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === '/dashboard' ? 'bg-gray-700' : ''
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/scoreboard"
                  className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === '/scoreboard' ? 'bg-gray-700' : ''
                  }`}
                >
                  Scoreboard
                </Link>
                {session?.user?.isAdmin && (
                  <Link
                    href="/admin"
                    className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      pathname === '/admin' ? 'bg-gray-700' : ''
                    }`}
                  >
                    Admin
                  </Link>
                )}
                <Link
                  href="/profile"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-colors"
                >
                  {session?.user?.name?.[0]?.toUpperCase() || '?'}
                </Link>
                <Link
                  href="/api/auth/signout"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign Out
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/signin"
                  className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === '/auth/signin' ? 'bg-gray-700' : ''
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === '/auth/signup' ? 'bg-gray-700' : ''
                  }`}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 