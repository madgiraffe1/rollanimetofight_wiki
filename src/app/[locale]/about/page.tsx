import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Roll Anime to Fight! Wiki',
  description: 'Roll Anime to Fight! Wiki is an unofficial fan guide hub for Roll Anime to Fight!.',
}

export default function Page() {
  return (
    <main className="min-h-screen px-4 pt-28 pb-16">
      <div className="container mx-auto max-w-3xl">
        <h1 className="mb-5 text-3xl font-bold md:text-4xl">About Roll Anime to Fight! Wiki</h1>
        <div className="space-y-5 text-muted-foreground leading-7">
          <p>Roll Anime to Fight! Wiki is an unofficial fan guide hub built to organize practical, source-aware information for Roll Anime to Fight!.</p>
          <p>The site focuses on safe Roblox progression, verified code status, beginner priorities, update notes, and guide planning without scripts or exploit advice.</p>
          <p>This site is not affiliated with Another Slop or Roblox Corporation.</p>
        </div>
      </div>
    </main>
  )
}
