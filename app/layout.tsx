import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import GithubIcon from '@/components/icons/GithubIcon'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wiki Top',
  description: 'Wiki Top Articles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`container mx-auto ${inter.className}`}>
        <nav className="my-10 flex items-center justify-between text-center">
          <section className="flex gap-2">
            <small>🔥 Rank</small>
            <small>👁️ Views</small>
          </section>
          <Link href="/">Wiki Top</Link>
          <Link
            className="flex w-fit cursor-pointer gap-3 rounded-md border border-black bg-black fill-white p-2 text-white transition-all duration-300 hover:bg-white hover:fill-black hover:text-black"
            href="https://github.com/herol3oy/wiki-top"
            target="_blank"
          >
            <GithubIcon />
            <h6>Github</h6>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
