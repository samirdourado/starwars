import { PlanetProvider } from '@/contexts/planetContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Star Wars Planets',
  description: 'Teste técnico dos planetas de Star Wars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <PlanetProvider>
          {children}
        </PlanetProvider>
      </body>
    </html>
  )
}
