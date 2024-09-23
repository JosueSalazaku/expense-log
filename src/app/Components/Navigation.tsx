"use client";

import Link from 'next/link';
import React from 'react';
import { SignedIn, SignedOut, UserButton, useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const { signOut } = useAuth();
  const router = useRouter();  

  const handleSignOut = async () => {
    await signOut();
    router.push('/'); 
  };

  return (
    <nav className='w-screen h-[120px] px-10 flex flex-row justify-evenly items-center bg-zinc-900'>
      <Link href="/" className='text-2xl font-bold'>Logo</Link>
      <ul className='flex flex-row justify-end items-center font-bold gap-10 text-xl w-full'>
        <SignedIn> 
          <li><Link href="/overview">Overview</Link></li>
          <li><Link href="/expenses">Expenses</Link></li>
          <li><UserButton /></li>
          <li>
            <Button onClick={handleSignOut} className='font-bold text-xl bg-zinc-500'>
              Sign Out
            </Button>
          </li>
        </SignedIn>
        <SignedOut>
          <li><Link href="/sign-in">Sign In</Link></li>
          <li><Link href="/sign-up">Sign Up</Link></li>
        </SignedOut>
      </ul>
    </nav>
  );
}
