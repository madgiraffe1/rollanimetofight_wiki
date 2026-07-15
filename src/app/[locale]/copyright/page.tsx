import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Copyright',
  description: 'Roll Anime to Fight! Wiki copyright information.',
}

export default function Page() {
  return (
    <main className="min-h-screen px-4 pt-28 pb-16">
      <div className="container mx-auto max-w-3xl">
        <h1 className="mb-5 text-3xl font-bold md:text-4xl">Copyright</h1>
        <div className="space-y-5 text-muted-foreground leading-7">
          <p>Roll Anime to Fight! and related official assets belong to their respective owners.</p>
          <p>Roll Anime to Fight! Wiki uses game-identifying references only to describe the fan guide topic and link users to official sources.</p>
          <p>For copyright or takedown requests, contact copyright@rollanimetofight.online.</p>
        </div>
      </div>
    </main>
  )
}
