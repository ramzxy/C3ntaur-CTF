'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import TeamIconSelection from '@/components/auth/TeamIconSelection';

export default function SignUp() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [teamOption, setTeamOption] = useState('create');
  const [selectedIcon, setSelectedIcon] = useState('GiSpaceship');
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const handleTeamOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamOption(e.target.value);
  };

  useEffect(() => {
    const createTeamFields = document.getElementById('createTeamFields');
    const joinTeamFields = document.getElementById('joinTeamFields');
    
    if (createTeamFields && joinTeamFields) {
      if (teamOption === 'create') {
        createTeamFields.classList.remove('hidden');
        joinTeamFields.classList.add('hidden');
      } else {
        createTeamFields.classList.add('hidden');
        joinTeamFields.classList.remove('hidden');
      }
    }
  }, [teamOption]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const alias = formData.get('alias') as string;
    const password = formData.get('password') as string;
    const teamName = formData.get('teamName') as string;
    const teamCode = formData.get('teamCode') as string;

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name,
          alias, 
          password,
          teamOption,
          teamName,
          teamCode,
          teamIcon: selectedIcon,
          teamColor: selectedColor
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to register');
      }

      const data = await response.json();
      toast.success('Account created successfully! Signing you in...');

      // Attempt to sign in with the new credentials
      const result = await signIn('credentials', {
        alias: data.user.alias,
        password: data.user.password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error('Failed to sign in automatically');
      }

      // Successful sign in, redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        toast.error(error.message);
      } else {
        setError('An error occurred');
        toast.error('An error occurred');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            Create your account or team
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="input-field"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label htmlFor="alias" className="sr-only">
              Alias
            </label>
            <input
              id="alias"
              name="alias"
              type="text"
              required
              className="input-field"
              placeholder="Alias"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="input-field"
              placeholder="Password"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="createTeam"
                name="teamOption"
                value="create"
                defaultChecked
                className="h-4 w-4 text-blue-600"
                onChange={handleTeamOptionChange}
              />
              <label htmlFor="createTeam" className="text-white">
                Create a new team
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="joinTeam"
                name="teamOption"
                value="join"
                className="h-4 w-4 text-blue-600"
                onChange={handleTeamOptionChange}
              />
              <label htmlFor="joinTeam" className="text-white">
                Join existing team
              </label>
            </div>
          </div>

          <div id="createTeamFields">
            <label htmlFor="teamName" className="sr-only">
              Team Name
            </label>
            <input
              id="teamName"
              name="teamName"
              type="text"
              className="input-field"
              placeholder="Team Name"
            />
            
            <div className="mt-4">
              <TeamIconSelection
                selectedIcon={selectedIcon}
                selectedColor={selectedColor}
                onIconSelect={setSelectedIcon}
              />

              <div className="mt-4">
                <label className="block text-white mb-2">Team Color</label>
                <input
                  type="color"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-12 h-12 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div id="joinTeamFields" className="hidden">
            <label htmlFor="teamCode" className="sr-only">
              Team Code
            </label>
            <input
              id="teamCode"
              name="teamCode"
              type="text"
              className="input-field"
              placeholder="Team Code"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              className="button w-full hover:bg-white hover:text-black transition duration-300"
            >
              Sign up
            </button>
          </div>
          <div className="text-center">
            <Link href="/auth/signin" className="text-gray-500 hover:text-blue-500">
              Already have an account? Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}