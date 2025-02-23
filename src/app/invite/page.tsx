import Image from 'next/image'
import logo from '../../assets/logo.svg'

import { InviteLinkInput } from './inviteLinkInput'
import { Ranking } from './ranking'
import { Stats } from './stats'

export default function InvitePage() {
  const inviteLink = 'http://localhost:3000/invite/3291381203801293812313'

  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" className="h-[30px] w-[108.5px]" />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Registration confirmed!
          </h1>
          <p className="text-gray-300">
            To enter the event, access the link sent to your email.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Refer and earn
            </h2>
            <p className="text-gray-300">
              Invite more people to the event and compete for prizes exclusive!
              Just share the link below and follow the registrations:
            </p>
          </div>
        </div>

        <InviteLinkInput inviteLink={inviteLink} />

        <Stats />
      </div>

      <Ranking />
    </div>
  )
}
