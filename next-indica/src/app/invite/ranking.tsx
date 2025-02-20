import Image from 'next/image'
import logo from '../../../assets/logo.svg'
import cooper from '../../../assets/medal-cooper.svg'
import gold from '../../../assets/medal-gold.svg'
import silver from '../../../assets/medal-silver.svg'

export default function Ranking() {
	return (
		<div className="w-full max-w-[440px] space-y-5">
			<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
				Ranking indicações
			</h2>

			<div className="space-y-4">
				<div className=" relative rounded-xl bg-gray-700 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span className="font-semibold">1°</span> | Diego Fernandes
					</span>
					<span className="font-heading text-2xl text-gray-200 font-semibold leading-none">
						1030
					</span>
					<Image src={gold} alt="Gold" className="absolute top-0 right-8" />
				</div>
				<div className=" relative rounded-xl bg-gray-700 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span className="font-semibold">2°</span> | Diego Fernandes
					</span>
					<span className="font-heading text-2xl text-gray-200 font-semibold leading-none">
						1030
					</span>
					<Image src={silver} alt="Silver" className="absolute top-0 right-8" />
				</div>
				<div className=" relative rounded-xl bg-gray-700 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span className="font-semibold">3°</span> | Diego Fernandes
					</span>
					<span className="font-heading text-2xl text-gray-200 font-semibold leading-none">
						1030
					</span>
					<Image src={cooper} alt="Cooper" className="absolute top-0 right-8" />
				</div>
			</div>
		</div>
	)
}
