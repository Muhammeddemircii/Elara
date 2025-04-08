import './globals.css'
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import { Inter, Lexend, Montserrat } from 'next/font/google'
import I18nProvider from '../components/I18nProvider'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['200','300','400','500','600', '700','800'],
  variable: '--font-inter',
});

const lexend = Lexend({ 
  subsets: ['latin'],
  weight: ['200','300','400','500','600', '700','800'],
  variable: '--font-lexend',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200','300','400','500','600', '700','800'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'Elara - Elara tarım',
  description: 'Elara tarım',
  icons: {
    icon: '/images/logo-favicon.svg',
    apple: [
      { url: '/images/logo-favicon.svg' }
    ],
    shortcut: '/images/logo-favicon.svg'
  }
}

export default function RootLayout({ children }) {
  return (
    <html dir="LTR">
      <body className={`${inter.variable} ${lexend.variable} ${montserrat.variable} font-inter text-base text-slate-950 dark:text-white dark:bg-slate-900`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
