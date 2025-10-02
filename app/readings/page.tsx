// app/readings/page.tsx
import { readings } from './data'

export const metadata = {
  title: 'Readings',
  description: 'Suggested and assigned readings by theme.',
}

function Item({
  title, authors, venue, year, link, note,
}: {
  title: string
  authors?: string
  venue?: string
  year?: string | number
  link?: string
  note?: string
}) {
  return (
    <li className="py-4 md:py-5">
      <div className="flex flex-col">
        {/* Title */}
        <div className="font-medium leading-snug text-neutral-900 dark:text-neutral-100 mb-1.5">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent hover:border-neutral-400 dark:hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/40 rounded-sm"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </div>

        {/* Meta */}
        {(authors || venue || year || note) && (
          <div className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {[authors, venue, year].filter(Boolean).join(', ')}
            {note ? ` — ${note}` : ''}
          </div>
        )}
      </div>
    </li>
  )
}

export default function ReadingsPage() {
  const sections = Object.entries(readings)

  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tight">Readings</h1>

      {/* Top note */}
      <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-400">
        Regularly updated. Structured around four pillars: distribution; market power;
        geoeconomics; and information.
      </p>

      {sections.map(([section, items]) => (
        <div key={section} className="mt-10">
          {/* Pillar title (slightly larger) */}
          <h2 className="mb-3 text-base font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
            {section}
          </h2>

          {/* Minimal divided list, no boxes */}
          <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {items.map((r, i) => (
              <Item key={`${section}-${i}-${r.title}`} {...r} />
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
