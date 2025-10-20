import Link from 'next/link'
import { Upcoming } from 'app/components/upcoming'

export default function Page() {
  return (
    <section>
      <h1 className="mb-3 text-2xl font-semibold tracking-tight">
        Political Economy of Artificial Intelligence – Reading Group
      </h1>

      {/* byline: institutions */}
      <p className="mb-8 text-sm text-neutral-600 dark:text-neutral-400">
        Co-organised by{' '}
        <a
          href="https://www.parisschoolofeconomics.eu/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-neutral-400/40 hover:decoration-neutral-500 dark:decoration-neutral-500/40 dark:hover:decoration-neutral-300 transition-colors"
        >
          Paris School of Economics
        </a>{' '}
        and{' '}
        <a
          href="https://www.sciencespo.fr/department-economics/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-neutral-400/40 hover:decoration-neutral-500 dark:decoration-neutral-500/40 dark:hover:decoration-neutral-300 transition-colors"
        >
          Sciences Po
        </a>
      </p>

<p className="mb-2 max-w-prose text-neutral-700 dark:text-neutral-300 leading-relaxed">
  A weekly economics reading group on how AI interacts with institutions to
  shape growth, distribution, geoeconomics, and market power.
</p>

<div className="h-px bg-neutral-200 dark:bg-neutral-800 w-12 my-5" />

<p className="mb-10 max-w-prose text-neutral-700 dark:text-neutral-300 leading-relaxed">
  Each week we discuss two papers with a focus on generating research ideas.
  Papers for the next session are chosen at the end of the meeting.
</p>



      {/* upcoming meetings */}
      <div className="mt-8">
        <Upcoming limit={3} />
      </div>
    </section>
  )
}
