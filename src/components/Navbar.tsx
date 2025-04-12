'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useSiteConfig } from "./SiteConfigProvider";
import { useState, useEffect, useRef } from 'react';

interface CRTEffects {
  scanlines: boolean;
  flicker: boolean;
  transform: boolean;
  phosphor: boolean;
  glow: boolean;
}

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const { config } = useSiteConfig();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCrtMenuOpen, setIsCrtMenuOpen] = useState(false);
  const [crtEffects, setCrtEffects] = useState<CRTEffects>({
    scanlines: false,
    flicker: false,
    transform: false,
    phosphor: false,
    glow: false,
  });

  const navRef = useRef<HTMLDivElement>(null);
  const crtRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('crtEffects');
      if (stored !== null) {
        setCrtEffects(JSON.parse(stored));
      }
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsNavOpen(false);
      }
      if (crtRef.current && !crtRef.current.contains(event.target as Node)) {
        setIsCrtMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('crt-scanlines-disabled', !crtEffects.scanlines);
    document.body.classList.toggle('crt-flicker-disabled', !crtEffects.flicker);
    document.body.classList.toggle('crt-transform-disabled', !crtEffects.transform);
    document.body.classList.toggle('crt-phosphor-disabled', !crtEffects.phosphor);
    document.body.classList.toggle('crt-glow-disabled', !crtEffects.glow);
    localStorage.setItem('crtEffects', JSON.stringify(crtEffects));
  }, [crtEffects]);

  const toggleEffect = (effect: keyof CRTEffects) => {
    setCrtEffects(prev => ({
      ...prev,
      [effect]: !prev[effect]
    }));
  };

  const handleNavigation = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="z-50 fixed flex justify-center w-full pointer-events-none">
      <div className="max-w-3xl px-4 sm:px-6 lg:mx-8">
        <div className="flex items-center justify-between h-16">
          {/* Center section with navigation button, title, and scoreboard */}
          <div className="flex items-center justify-center gap-4 pointer-events-auto">
            <div className="relative" ref={navRef}>
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className={`text-gray-300 hover:text-white mx-20 py-2 rounded-md text-sm font-medium relative ${
                  isNavOpen ? 'border-b-2 border-white' : 'hover:border-b-2 hover:border-white'
                }`}
              >
                Navigation
              </button>

              {/* Navigation Menu - Positioned relative to button */}
              {isNavOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 bg-black border">
                  {/* Profile Section at Top */}
                  {status === 'authenticated' ? (
                    <>
                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        onClick={handleNavigation}
                      >  
                        <span>Profile</span>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/auth/signin"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        onClick={handleNavigation}
                      >
                        Sign In
                      </Link>
                      <Link
                        href="/auth/signup"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        onClick={handleNavigation}
                      >
                        Sign Up
                      </Link>
                      <div className="border-b border-gray-700 my-2"></div>
                    </>
                  )}

                  {/* Navigation Links */}
                  <Link
                    href="/dashboard"
                    className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 ${
                      pathname === '/dashboard' ? '' : ''
                    }`}
                    onClick={handleNavigation}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/scoreboard"
                    className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 ${
                      pathname === '/scoreboard' ? '' : ''
                    }`}
                    onClick={handleNavigation}
                  >
                    Scoreboard
                  </Link>
                  {session?.user?.isAdmin && (
                    <Link
                      href="/admin"
                      className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 ${
                        pathname === '/admin' ? 'bg-gray-700' : ''
                      }`}
                      onClick={handleNavigation}
                    >
                      Admin
                    </Link>
                  )}
                  {status === 'authenticated' && (
                    <Link
                      href="/api/auth/signout"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      onClick={handleNavigation}
                    >
                      Sign Out
                    </Link>
                  )}
                </div>
              )}
            </div>

            <Link 
              href={status === 'authenticated' ? "/dashboard" : "/"} 
              className="text-xl font-bold text-white"
            >
              {config?.siteTitle.toUpperCase() || "ORBITAL CTF"}
            </Link>

            <div className="relative" ref={crtRef}>
              <button
                onClick={() => setIsCrtMenuOpen(!isCrtMenuOpen)}
                className={`mx-20 text-gray-300 hover:text-white py-2 text-sm font-medium flex items-center ${
                  isCrtMenuOpen ? 'border-b-2 border-white' : 'hover:border-b-2 hover:border-white'
                }`}
              >
                Settings
              </button>

              {isCrtMenuOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 bg-black border">
                  <div
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
                    onClick={() => toggleEffect('scanlines')}
                  >
                    Scanlines {crtEffects.scanlines ? '☑' : '☐'}
                  </div>
                  <div
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
                    onClick={() => toggleEffect('flicker')}
                  >
                    Screen Flicker {crtEffects.flicker ? '☑' : '☐'}
                  </div>
                  <div
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
                    onClick={() => toggleEffect('transform')}
                  >
                    Screen Warp {crtEffects.transform ? '☑' : '☐'}
                  </div>
                  <div
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
                    onClick={() => toggleEffect('phosphor')}
                  >
                    Text Glow {crtEffects.phosphor ? '☑' : '☐'}
                  </div>
                  <div
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
                    onClick={() => toggleEffect('glow')}
                  >
                    Background Glow {crtEffects.glow ? '☑' : '☐'}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}