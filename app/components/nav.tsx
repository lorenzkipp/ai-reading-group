'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/', label: 'home' },
  { href: '/schedule', label: 'schedule' },
  { href: '/readings', label: 'readings' },
  { href: '/people', label: 'people' },
  // { href: '/blog', label: 'blog' },
] as const

export function Navbar() {
  const pathname = usePathname()

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          id="nav"
          className="flex flex-row items-start relative px-0 pb-0 md:overflow-auto scroll-pr-6"
        >
          <div className="flex flex-row flex-wrap pr-10">
            {NAV.map(({ href, label }) => {
              const isActive =
                href === '/'
                  ? pathname === '/'
                  : pathname === href || pathname.startsWith(`${href}/`)

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    'transition-all hover:text-neutral-800 dark:hover:text-neutral-200',
                    'flex items-center relative py-1 px-2 m-1',
                    isActive ? 'font-semibold' : 'text-neutral-600 dark:text-neutral-400',
                  ].join(' ')}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
