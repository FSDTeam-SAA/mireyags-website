"use client"
import Link from 'next/link'
import { ArrowLeft, Home, SearchX } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
      <div className="w-full max-w-xl rounded-2xl border border-white/15 bg-white/5 p-8 text-center md:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10"><SearchX className="h-8 w-8" /></div>
        <p className="mt-6 text-7xl font-black tracking-tight md:text-9xl">404</p>
        <h1 className="mt-3 text-2xl font-bold md:text-3xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/65">The page you&apos;re looking for may have moved, been removed, or never existed.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/80"><Home className="h-4 w-4" /> Back to home</Link>
          <button onClick={() => window.history.back()} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"><ArrowLeft className="h-4 w-4" /> Go back</button>
        </div>
      </div>
    </main>
  )
}
