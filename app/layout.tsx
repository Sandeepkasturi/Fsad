import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Full Stack Development Lab Manual',
  description: 'Lab Manual — Experiments 1–14 | TypeScript · ExpressJS · ReactJS · MongoDB',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
