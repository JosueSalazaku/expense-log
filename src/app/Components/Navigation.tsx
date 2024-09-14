import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <nav className='w-screen h-[120px] flex flex-row justify-between items-center bg-zinc-900'>
      <Link href="/" className='text-2xl font-bold'>Logo</Link>
      <ul className='flex flex-row justify-center items-center font-bold gap-10 text-xl w-full'>
        <li><Link href="/dashboard">Overview</Link></li>
        <li><Link href="/expenses">Expenses</Link></li>
        <li><Link href="/sign-in">Sign In</Link></li>
        <li><Link href="/sign-up">Sign Up</Link></li>
      </ul>
    </nav>
  )
}