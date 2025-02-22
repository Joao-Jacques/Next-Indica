import Image from 'next/image'
import logo from '../../../../assets/logo.svg'
import { InviteLinkInput } from './invite-link-input'
import { Ranking } from './ranking'
import { Stats } from './stats'

interface InvitePageProps {
	params: Promise<{
		subscriberId: string
	}>
}

export default async function InvitePage(props: InvitePageProps) {
	const { subscriberId } = await props.params

	const inviteLink = `http://localhost:3333/invites/${subscriberId}`
	return (
		<div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
			<div className="flex flex-col w-full max-w-[550px] gap-10">
				<Image src={logo} alt="devstage" width={108.5} height={30} />

				<div className="space-y-2">
					<h1 className="text-4xl font-semibold font-heading text-purple leading-none">
						Inscrição Confirmada!
					</h1>
					<p>
						Você foi inscrito com sucesso no evento, um link será enviado para o
						seu e-mail.
					</p>
				</div>
				<div className="space-y-6">
					<div className="space-y-3">
						<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
							{' '}
							Indique e ganhe
						</h2>
						<p>
							Convide mais pessoas para o evento e concorra a prêmios
							exclusivos!
						</p>
					</div>
					<InviteLinkInput inviteLink={inviteLink} />
					<Stats subscriberId={subscriberId} />
				</div>
			</div>
			<Ranking />
		</div>
	)
}
