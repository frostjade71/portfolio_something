import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
    metadataBase: new URL('https://jaderbypenaranda.vercel.app'),
    title: 'Jaderby Peñaranda | Computer Science Graduate',
    description: 'Portfolio of Jaderby Peñaranda - Computer Science Graduate from HCCCI. Developer, Editor, and Tech Enthusiast.',
    keywords: ['Jaderby Peñaranda', 'Computer Science', 'Graduate', 'Developer', 'Portfolio', 'HCCCI', 'Web Development'],
    authors: [{ name: 'Jaderby Peñaranda' }],
    icons: {
        icon: '/img/j-favicon.svg',
        shortcut: '/img/j-favicon.svg',
        apple: '/img/j-favicon.svg',
    },
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Jaderby Peñaranda | Computer Science Graduate',
        description: 'Portfolio of Jaderby Peñaranda - Computer Science Graduate from HCCCI',
        type: 'website',
        url: 'https://jaderbypenaranda.vercel.app',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
