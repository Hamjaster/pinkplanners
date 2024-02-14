import { Inter } from 'next/font/google'
import { Nunito_Sans } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
const inter = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
    title: 'Diamol',
    description: 'Event management company',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>

                {children}
                
                <Footer />
            </body>
        </html>
    )
}
