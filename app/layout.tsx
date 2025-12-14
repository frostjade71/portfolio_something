import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Jaderby Peñaranda | Computer Science Senior',
    description: 'Portfolio of Jaderby Peñaranda - Computer Science Senior at HCCCI. Developer, Editor, and Tech Enthusiast.',
    keywords: ['Jaderby Peñaranda', 'Computer Science', 'Developer', 'Portfolio', 'HCCCI'],
    authors: [{ name: 'Jaderby Peñaranda' }],
    icons: {
        icon: '/img/j-favicon.svg',
        shortcut: '/img/j-favicon.svg',
        apple: '/img/j-favicon.svg',
    },
    openGraph: {
        title: 'Jaderby Peñaranda | Computer Science Senior',
        description: 'Portfolio of Jaderby Peñaranda - Computer Science Senior at HCCCI',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
