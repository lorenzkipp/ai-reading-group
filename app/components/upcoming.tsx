// app/components/upcoming.tsx
import Link from 'next/link'
import { schedule } from 'app/schedule/data'

function fmt(iso: string) {
  const d = new Date(iso + 'T12:00:00Z')
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(d)
}

function todayISOInTZ(tz: string) {
  const now = new Date()
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now)

  const y = parts.find(p => p.type === 'year')!.value
  const m = parts.find(p => p.type === 'month')!.value
  const d = parts.find(p => p.type === 'day')!.value
  return `${y}-${m}-${d}`
}

export function Upcoming({ limit = 1 }: { limit?: number }) {
  const today = todayISOInTZ('Europe/Paris')

  const items = [...schedule]
    .filter(m => m.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, limit)

  if (items.length === 0) {
    return (
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        No upcoming meetings.
      </p>
    )
  }

  return (
    <section>
      {/* subtle header */}
      <h2 className="mb-3 text-xs font-semibold tracking-wider text-neutral-500 dark:text-neutral-400">
        NEXT MEETING
      </h2>

      <ul className="mt-4">
        {items.map((m, i) => (
          <li key={`${m.date}-${i}`} className="relative pl-10 py-4">
            {/* timeline styling */}
            <span className="pointer-events-none absolute left-4 top-0 bottom-0 border-l border-neutral-200 dark:border-neutral-800" />
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-px w-2 bg-neutral-300 dark:bg-neutral-700" />

            <div className="flex flex-col gap-1 items-start">
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {fmt(m.date)}{m.time ? ` · ${m.time}` : ''}
              </div>

              <Link
                href="/schedule"
                className="border-b border-transparent hover:border-neutral-400 dark:hover:border-neutral-300 font-medium text-neutral-900 dark:text-neutral-100"
              >
                {m.topic}{m.presenter ? ` — ${m.presenter}` : ''}
              </Link>

              {(m.room || m.links?.length) && (
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {m.room}
                  {m.room && m.links?.length ? ' · ' : ''}

                  {m.links?.map((l, j) => (
                    <span key={l.href + j}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-transparent hover:border-neutral-400 dark:hover:border-neutral-300"
                      >
                        {l.label}
                      </a>
                      {j < (m.links?.length ?? 0) - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              )}

              {m.note && (
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  {m.note}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
