import { SignedIn, SignedOut } from "@clerk/nextjs"

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
    <SignedIn>
        <h1>EXPENSE TRACKER/LOG</h1>
    </SignedIn>
    <SignedOut>
        <h1>
          WELCOM I GUESSE
        </h1>
    </SignedOut>
    </main>
  );
}
