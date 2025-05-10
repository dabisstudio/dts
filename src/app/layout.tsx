import type { Metadata } from 'next'
import './globals.css'
import VerticalMenu from '@/components/layout/VerticalMenu'

export const metadata: Metadata = {
  title: 'DabisStudio',
  description: 'Luminous Precision in Digital Experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <VerticalMenu />
          <main className="content-area flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
