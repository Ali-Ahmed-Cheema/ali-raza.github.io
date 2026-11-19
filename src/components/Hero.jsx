import { useState } from 'react'
import { ArrowDown, GraduationCap, MapPin } from 'lucide-react'
import { profile } from '../data/profile.js'

// Drop the photo into /images (any file name, jpg/jpeg/png/webp/avif).
// The first match is used; Vite hashes and caches it at build time.
const photos = import.meta.glob('/images/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const photoSrc = Object.values(photos)[0]

function Portrait() {
  const [failed, setFailed] = useState(false)
  const showPhoto = photoSrc && !failed

  return (
    <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:mx-0 lg:justify-self-end">
      {/* offset outline gives the arch some depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-[999px] rounded-b-3xl border border-cobalt/40 sm:translate-x-4 sm:translate-y-4"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-gradient-to-br from-cobalt/15 via-paper to-sea/20 ring-1 ring-line">
        {showPhoto ? (
          <img
            src={photoSrc}
            alt={`Portrait of ${profile.name}`}
            width="800"
            height="1000"
            decoding="async"
            fetchPriority="high"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div
            role="img"
            aria-label={`${profile.name} monogram`}
            className="flex h-full w-full items-end justify-center pb-10 font-display text-7xl font-semibold tracking-tight text-ink/70"
          >
            AR
          </div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-cobalt/15 to-sea/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
        <div>
          <p className="rise text-base font-medium text-cobalt" style={{ '--i': 0 }}>
            {profile.status}
          </p>

          <h1
            className="rise mt-4 font-display text-[clamp(3.5rem,13vw,8.5rem)] leading-[0.92] font-semibold tracking-[-0.04em]"
            style={{ '--i': 1 }}
          >
            Ali
            <br />
            Raza
          </h1>

          <p
            className="rise mt-8 max-w-[34ch] text-lg leading-relaxed text-slate sm:text-xl"
            style={{ '--i': 2 }}
          >
            I study software engineering at {profile.university} and I am building this site as
            my home on the web.
          </p>

          <ul
            className="rise mt-7 flex flex-col gap-2.5 text-sm text-slate sm:flex-row sm:flex-wrap sm:gap-x-7"
            style={{ '--i': 3 }}
          >
            <li className="flex items-center gap-2">
              <GraduationCap size={18} className="text-cobalt" aria-hidden="true" />
              {profile.degree}, {profile.universityShort}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-cobalt" aria-hidden="true" />
              {profile.location}
            </li>
          </ul>

          <div className="rise mt-10 flex flex-wrap items-center gap-4" style={{ '--i': 4 }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-cobalt"
            >
              Get in touch
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a
              href="#about"
              className="px-2 py-3 text-base font-medium text-slate underline decoration-line decoration-2 underline-offset-8 transition-colors hover:text-ink hover:decoration-cobalt"
            >
              About me
            </a>
          </div>
        </div>

        <div className="rise" style={{ '--i': 3 }}>
          <Portrait />
        </div>
      </div>
    </section>
  )
}
