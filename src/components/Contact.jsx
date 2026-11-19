import { ArrowUpRight, Mail } from 'lucide-react'
import { InstagramIcon, SnapchatIcon } from './BrandIcons.jsx'
import { socials } from '../data/profile.js'

const channels = [
  { ...socials.email, Icon: Mail, external: false },
  { ...socials.instagram, Icon: InstagramIcon, external: true },
  { ...socials.snapchat, Icon: SnapchatIcon, external: true },
]

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Get in touch
          </h2>
          <p className="mt-5 max-w-[30ch] text-lg leading-relaxed text-slate">
            Email is the best way to reach me. I am also on Instagram and Snapchat.
          </p>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {channels.map(({ label, handle, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-4 py-5 transition-colors sm:gap-5 sm:py-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper text-ink ring-1 ring-line transition-colors group-hover:bg-cobalt group-hover:text-white group-hover:ring-cobalt">
                  <Icon size={20} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-slate">{label}</span>
                  <span className="block truncate text-base font-medium sm:text-lg">
                    {handle}
                  </span>
                </span>
                <ArrowUpRight
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 text-slate transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
