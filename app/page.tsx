import Link from 'next/link'
import { Upcoming } from 'app/components/upcoming'

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tight">
        Political Economy of Artificial Intelligence - Reading Group
      </h1>

      {/* byline: institutions */}
      <p className="mb-9 text-sm text-neutral-600 dark:text-neutral-400">
        Co-organised by the{' '}
        <a
          href="https://www.parisschoolofeconomics.eu/en/"
          target="_blank" rel="noopener noreferrer"
          className="border-b border-transparent hover:border-neutral-400 dark:hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/40 rounded-sm"
        >
          Paris School of Economics
        </a>{' '}
        and{' '}
        <a
          href="https://www.sciencespo.fr/department-economics/"
          target="_blank" rel="noopener noreferrer"
          className="border-b border-transparent hover:border-neutral-400 dark:hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/40 rounded-sm"
        >
          Sciences Po
        </a>
      </p>

      {/* very short about */}
      <p className="mb-6 max-w-prose text-neutral-700 dark:text-neutral-300">
        A weekly economics reading group on how AI interacts with institutions to
        shape growth, distribution, geoeconomics, and market power.
      </p>

      {/* Upcoming meetings on the home page */}
      <div className="mt-10">
        <Upcoming limit={3} />
      </div>
    </section>
  )
}
