import { AtSign, Plus, X } from 'lucide-react'
import { FormEvent } from 'react'

import { Button } from '../../components/button'
import { Input } from '../../components/input'

interface InviteGuestsModalProps {
  closeGuestsModal(): void
  addNewEmailToInvite(event: FormEvent<HTMLFormElement>): void
  removeEmailFromInvites(email: string): void
  emailsToInvite: string[]
}

export function InviteGuestsModal({
  closeGuestsModal,
  addNewEmailToInvite,
  removeEmailFromInvites,
  emailsToInvite,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/60">
      <div className="space-y-5 bg-zinc-900 shadow-shape px-6 py-5 rounded-xl w-[640px]">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">Selecionar convidados</h2>

            <button onClick={closeGuestsModal}>
              <X className="size-5" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => (
            <div
              className="flex items-center gap-2 bg-zinc-800 px-2.5 py-1.5 rounded-md"
              key={email}
            >
              <span className="text-zinc-300">{email}</span>

              <button onClick={() => removeEmailFromInvites(email)}>
                <X className="text-zinc-400 size-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-zinc-800 w-full h-px" />

        <form
          onSubmit={addNewEmailToInvite}
          className="flex items-center gap-2 border-zinc-800 bg-zinc-950 p-2.5 border rounded-lg h-14"
        >
          <div className="flex flex-1 items-center gap-2 px-2">
            <AtSign className="text-zinc-400 size-5" />

            <Input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
            />
          </div>

          <Button variant="primary" type="submit">
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  )
}
