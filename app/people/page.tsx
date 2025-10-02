// app/people/page.tsx

export const dynamic = 'force-dynamic' // render on each request so order can change

import { organizers, members } from './data'

// pure Fisher–Yates on a copy
function shuffle<T>(list: T[]): T[] {
  const a = list.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function Email({ value }: { value?: string }) {
  if (!value) return null
  const looksObfuscated = value.includes('[at]') || value.includes(' at ')
  return looksObfuscated ? <span>{value}</span> : <a href={`mailto:${value}`}>{value}</a>
}

function PersonCard({
  name, role, affiliation, url, email,
}: {
  name: string
  role?: string
  affiliation?: string
  url?: string
  email?: string
}) {
  const Name = (
    <span className="font-medium text-neutral-900 dark:text-neutral-100">
      {name}
    </span>
  )

  return (
    <li className="rounded-2xl border border-neutral-200/70 p-4 transition-colors hover:border-neutral-300 dark:border-neutral-800/70 dark:hover:border-neutral-700">
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-wrap items-center gap-x-2">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              {Name}
            </a>
          ) : (
            Name
          )}
          {role && (
            <span className="text-xs text-neutral-600 dark:text-neutral-400">
              • {role}
            </span>
          )}
        </div>

        {/* Affiliation */}
        {affiliation && (
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            {affiliation}
          </div>
        )}

        {/* Email on its own line */}
        {email && (
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            <Email value={email} />
          </div>
        )}
      </div>
    </li>
  )
}


export default function PeoplePage() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tight">People</h1>

      {/* Organisers */}
      <h2 className="mt-4 text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
        Organisers
      </h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {shuffle(organizers).map((p) => (
          <PersonCard key={p.name} {...p} />
        ))}
      </ul>

      {/* Associated members */}
      {members.length > 0 && (
        <>
          <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            Associated members
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {shuffle(members).map((p) => (
              <PersonCard key={p.name} {...p} />
            ))}
          </ul>
        </>
      )}
    </section>
  )
}
