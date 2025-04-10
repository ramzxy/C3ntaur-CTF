import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome to Orbital CTF
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-300">
            80s retro ui, space-themed, batteries included.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Link
              href="/auth/signup"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium text-white  hover:text-blue-500 hover:border-blue-500"
            >
              Register
            </Link>
            <Link
              href="/auth/signin"
              className="inline-flex items-center px-6 py-3 border border-gray-400 text-base font-medium text-gray-400  hover:text-blue-500 hover:border-blue-500"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
