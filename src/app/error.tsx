"use client"

import { AlertTriangle, RefreshCw } from 'lucide-react'
import { useEffect } from 'react'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  useEffect(() => { console.error('Unhandled error:', error) }, [error])

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
      <div className="w-full max-w-lg rounded-2xl border border-white/15 bg-white/5 p-8 text-center shadow-2xl">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10"><AlertTriangle className="h-7 w-7" /></div>
        <h1 className="mt-5 text-2xl font-bold">Something went wrong</h1>
        <p className="mt-3 text-sm leading-6 text-white/65">We couldn&apos;t complete that request. Please try again, or return to the homepage.</p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <button onClick={() => reset()} className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/80"><RefreshCw className="h-4 w-4" /> Try again</button>
          <a href="/" className="rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Back to home</a>
        </div>
      </div>
    </main>
  )
}
