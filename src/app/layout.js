import '../css/globals.css'
import { Inter } from 'next/font/google'
import Footer from './footer';
import Navigation from './Navigation';
import { AuthContext } from '@/context/AuthContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <Navigation />
            {children}
          <Footer />
        </AuthContext>
      </body>
    </html>
  )
}

