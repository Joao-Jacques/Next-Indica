import { Radio } from 'lucide-react'
import Image from 'next/image'
import logo from '../../../assets/logo.svg'
import { SubscriptionForm } from './subsciption-form'

export default function Home() {
	return (
		<div className="min-h-dvh flex justify-center gap-16 flex-col">
			<div className="flex flex-col gap-8 items-center md:items-start">
				<Image src={logo} alt="devstage" width={108.5} height={30} />
				<h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
					<span className="text-purple">Next Indica</span>
					Summit 2025
				</h1>
			</div>
			<div className="flex gap-5 items-stretch md:flex-row">
				<div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
					<div className="flex items-center justify-between">
						<h2 className="font-heading font-semibold text-gray-200 text-xl">
							Sobre o Evento
						</h2>
						<span className="text-purple font-semibold text-xs flex items-center gap-2">
							<Radio className="size-5" />
							Ao Vivo
						</span>
					</div>
					<p className="text-gray-300 leading-relaxed text-sm md:text-base">
						Conheça as novidades do ecossistema Next.js e React, com palestras
						exclusivas de especialistas da Vercel e da comunidade. Aprenda sobre
						performance, SEO, acessibilidade, testes, design systems e muito
						mais.
						<br />
						<br />
						Dias 17 e 20 de fevereiro de 2025
					</p>
				</div>
				<SubscriptionForm />
			</div>
		</div>
	)
}
