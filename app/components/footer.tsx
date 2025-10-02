'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

function TextLoop({ messages, interval = 4000 }: { messages: string[]; interval?: number }) {
  const [curr, setCurr] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    // rotate
    timer.current = window.setInterval(() => {
      setPrev((p) => (p === null ? 0 : (p + 1) % messages.length))
      setCurr((c) => (c + 1) % messages.length)
    }, interval)
    return () => {
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [messages.length, interval])

  return (
    <div className="relative h-5 overflow-hidden">
      {/* current */}
      <div key={curr} className="absolute inset-0 animate-fade-in-up will-change-transform">
        {messages[curr]}
      </div>
      {/* previous (animates out) */}
      {prev !== null && (
        <div key={`prev-${prev}`} className="absolute inset-0 animate-fade-out-up will-change-transform">
          {messages[prev]}
        </div>
      )}

      {/* local styles (styled-jsx) */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOutUp {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-4px); }
        }
        .animate-fade-in-up { animation: fadeInUp 260ms ease-out forwards; }
        .animate-fade-out-up { animation: fadeOutUp 260ms ease-in forwards; }
      `}</style>
    </div>
  )
}

export default function Footer() {
  // Hydration-safe: don’t render dynamic time on the server.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const year = useMemo(
    () => (typeof window !== 'undefined' ? new Date().getFullYear() : null),
    []
  )

  const rotating = mounted
    ? [
        `© ${year} AI Reading Group.`,
        `Built with Next.js Portfolio Starter.`,
      ]
    : [`© AI Reading Group.`] // stable SSR placeholder

  return (
    <footer className="mt-4">
      {/* top links */}
      <ul className="font-sm mb-6 flex flex-col space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {/* <li>
          <a
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href="mailto:reading-group@example.edu"
          >
            Contact
          </a>
        </li> */}
        {/* Optional: expose an iCal feed once you add it
        <li>
          <a
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href="/ics"
          >
            Add to Calendar (.ics)
          </a>
        </li>
        */}
      </ul>

      {/* divider */}
      <div className="border-t border-neutral-200 dark:border-neutral-800" />

      {/* rotating credit line */}
      <div
        className="mt-3 text-xs text-neutral-500 dark:text-neutral-400"
        aria-live="polite"
        suppressHydrationWarning
      >
        <TextLoop messages={rotating} />
      </div>
    </footer>
  )
}
