'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-black/30 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              Orbital CTF
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {status === 'authenticated' ? (
              <>
                <Link
                  href="/dashboard"
                  className={`text-white hover:text-gray-300 border border-white/30 px-4 py-2 hover:bg-white/10 transition-colors ${
                    pathname === '/dashboard' ? 'bg-white/20' : ''
                  }`}
                >
                  Dashboard
                </Link>
                {session?.user?.isAdmin && (
                  <Link
                    href="/admin"
                    className={`text-white hover:text-gray-300 border border-white/30 px-4 py-2 hover:bg-white/10 transition-colors ${
                      pathname === '/admin' ? 'bg-white/20' : ''
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
                <button
                  onClick={() => signOut()}
                  className="text-white hover:text-gray-300 border border-white/30 px-4 py-2 hover:bg-white/10 transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className={`text-white hover:text-gray-300 border border-white/30 px-4 py-2 rounded-md hover:bg-white/10 transition-colors ${
                    pathname === '/auth/signin' ? 'bg-white/20' : ''
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className={`text-white hover:text-gray-300 border border-white/30 px-4 py-2 rounded-md hover:bg-white/10 transition-colors ${
                    pathname === '/auth/signup' ? 'bg-white/20' : ''
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