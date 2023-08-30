import '@/styles/style.css'

import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Header from '@/components/ui/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const aspekta = localFont({
  src: [
    {
      path: '../public/fonts/Aspekta-700.woff2',
      weight: '700',
    },
  ],
  variable: '--font-aspekta',
  display: 'swap',
})

export const metadata = {
  title: 'Ai Bounty Hub',
  description: "In AI BountyHub, every AI prompt has its value. Post your needs, or answer others' challenges, and let cryptocurrency be the reward for your knowledge.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${aspekta.variable} font-inter antialiased bg-slate-900 text-slate-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
