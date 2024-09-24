"use client";

import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/Components/ui/button";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <nav className="w-screen h-20 px-10 flex flex-row justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        Logo
      </Link>
      <ul className="flex flex-row justify-center items-center border rounded-3xl font-medium gap-14 px-10 py-1 text-xl">
        <SignedIn>
          <li>
            <Link href="/overview">Overview</Link>
          </li>
          <li>
            <Link href="/expenses">Expenses</Link>
          </li>
        </SignedIn>
      </ul>
      <ul className="flex flex-row justify-center items-center gap-4">
        <SignedIn>
          <li>
            <UserButton />
          </li>
          <li>
            <Button
              onClick={handleSignOut}
              className="font-bold text-xl rounded-3xl bg-zinc-500"
            >
              Sign Out
            </Button>
          </li>
        </SignedIn>
        <SignedOut>
          <li>
            <Link href="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link href="/sign-up">Sign Up</Link>
          </li>
        </SignedOut>
      </ul>
    </nav>
  );
}
