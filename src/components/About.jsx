import { profile } from '../data/profile.js'

const facts = [
  { term: 'Degree', detail: profile.degreeShort },
  { term: 'University', detail: `${profile.universityShort}, ${profile.university}` },
  { term: 'Location', detail: profile.location },
]

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <h2 className="font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          About
        </h2>

        <div>
          <p className="max-w-[60ch] text-lg leading-8 text-slate sm:text-xl sm:leading-9">
            I am {profile.name}, an undergraduate working toward a {profile.degree} at{' '}
            {profile.university} ({profile.universityShort}) in {profile.location}.
          </p>
          <p className="mt-6 max-w-[60ch] text-lg leading-8 text-slate sm:text-xl sm:leading-9">
            This website will serve as my personal portfolio. It starts small, with a single
            page, and will grow as I have more to show.
          </p>

          <dl className="mt-12 divide-y divide-line border-y border-line">
            {facts.map((f) => (
              <div key={f.term} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-sm font-medium text-slate">{f.term}</dt>
                <dd className="font-medium">{f.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
