import { profile } from '../data/profile.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-slate sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span className="font-display text-base font-semibold text-ink">{profile.name}</span>
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
