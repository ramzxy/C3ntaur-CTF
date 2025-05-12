'use client';

import Link from 'next/link';
import SpaceScene from '@/components/SpaceScene';

export default function NotFound() {
  return (
    <div className="min-h-screen relative">
      <div className="pointer-events-none absolute inset-0">
        <SpaceScene isMobile={false} />
      </div>
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center p-8 border bg-black/90">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-red-500 mb-4">
              ERROR 404
            </h1>
            <p className="mt-5 text-xl text-gray-300 mb-8">
              The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 border border-white hover:text-blue-500 hover:border-blue-500 whitespace-nowrap"
              >
                Go Back
              </button>
              <Link
                href="/"
                className="px-6 py-3 border border-gray-400 text-gray-400 hover:text-blue-500 hover:border-blue-500 whitespace-nowrap"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
