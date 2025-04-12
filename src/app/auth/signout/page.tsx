'use client';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignOut() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/auth/signin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            Sign Out
          </h2>
        </div>
        <div className=" p-8">
          <div className="text-center text-gray-300 mb-6">
            Are you sure you want to sign out?
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleSignOut}
              className="button w-full bg-red-500 hover:bg-red-600 text-white py-2 transition-colors"
            >
              Sign Out
            </button>
            <button
              onClick={() => router.back()}
              className="button w-full bg-gray-500 hover:bg-gray-600 text-white py-2 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}