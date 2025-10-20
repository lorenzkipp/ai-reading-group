// app/schedule/page.tsx
import { schedule } from './data'

export const metadata = {
  title: 'Schedule',
  description: 'Upcoming meetings and topics.',
}

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

export default function SchedulePage() {
  const items = [...schedule].sort((a, b) => a.date.localeCompare(b.date))

  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tight">Schedule</h1>
      <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-400">
        Dates and topics for the current term.
      </p>

<ul className="mt-6">
  {items.map((m, i) => (
    <li key={`${m.date}-${i}`} className="relative pl-10 py-4">
      {/* vertical rail (hairline) */}
      <span className="pointer-events-none absolute left-4 top-0 bottom-0 border-l border-neutral-200 dark:border-neutral-800" />
      {/* centered horizontal tick */}
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-px w-2 bg-neutral-300 dark:bg-neutral-700" />

      <div className="flex flex-col gap-1">
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          {fmt(m.date)}{m.time ? ` · ${m.time}` : ''}
        </div>
        <div className="font-medium text-neutral-900 dark:text-neutral-100">
          {m.topic}{m.presenter ? ` — ${m.presenter}` : ''}
        </div>
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
                {j < m.links.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        )}
        {m.note && (
          <div className="text-sm text-neutral-500 dark:text-neutral-400">{m.note}</div>
        )}
      </div>
    </li>
  ))}
</ul>

    </section>
  )
}
