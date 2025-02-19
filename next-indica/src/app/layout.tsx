import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'
import './global.css'

export const metadata: Metadata = {
	title: 'Next Indica',
}

const oxanium = Oxanium({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-oxanium',
})

const montserrat = Montserrat({
	weight: ['400', '600'],
	subsets: ['latin'],
	variable: '--font-montserrat',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
			<body className="bg-gray-900 text-gray-100 antilaliased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top">
				{children}
			</body>
		</html>
	)
}
