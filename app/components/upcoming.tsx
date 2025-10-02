// app/components/upcoming.tsx
import { schedule } from 'app/schedule/data'

function formatDate(iso: string) {
  // Hydration-safe, fixed TZ formatting
  const d = new Date(iso + 'T12:00:00Z')
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(d)
}

export function Upcoming({ limit = 1 }: { limit?: number }) {
  const today = new Date().toISOString().slice(0, 10)
  const items = [...schedule]
    .filter((m) => m.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, limit)

  if (items.length === 0) {
    return (
      <div className="text-sm text-neutral-600 dark:text-neutral-400">
        No upcoming meetings yet.
      </div>
    )
  }

  const next = items[0]

  return (
    <div>
      <h2 className="mt-4 text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
        Next meeting
      </h2>

      <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
        <li key={`${next.date}-${next.topic}`} className="py-3">
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(next.date)}
            {next.time ? ` · ${next.time}` : ''}
          </div>
          <div className="font-medium text-neutral-900 dark:text-neutral-100">
            {next.topic}
            {next.presenter ? ` — ${next.presenter}` : ''}
          </div>
          {(next.room || next.links?.length) && (
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              {next.room}
              {next.room && next.links?.length ? ' · ' : ''}
              {next.links?.map((l, i) => (
                <span key={l.href + i}>{l.label}</span>
              ))}
            </div>
          )}
        </li>
      </ul>
    </div>
  )
}
