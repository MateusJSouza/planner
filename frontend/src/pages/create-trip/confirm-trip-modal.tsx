import { Mail, User, X } from 'lucide-react'
import { FormEvent } from 'react'

import { Button } from '../../components/button'
import { Input } from '../../components/input'

interface ConfirmTripModalProps {
  closeConfirmTripModal(): void
  createTrip(event: FormEvent<HTMLFormElement>): void
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/60">
      <div className="space-y-5 bg-zinc-900 shadow-shape px-6 py-5 rounded-xl w-[640px]">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">Confirmar criação de viagem</h2>

            <button onClick={closeConfirmTripModal}>
              <X className="size-5" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{' '}
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>{' '}
            nas datas de{' '}
            <span className="font-semibold text-zinc-100">
              16 de Agosto de 2024
            </span>{' '}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="flex items-center gap-2 border-zinc-800 bg-zinc-950 px-4 border rounded-lg h-14">
            <User className="text-zinc-400 size-5" />

            <Input type="text" name="name" placeholder="Seu nome completo" />
          </div>

          <div className="flex items-center gap-2 border-zinc-800 bg-zinc-950 px-4 border rounded-lg h-14">
            <Mail className="text-zinc-400 size-5" />

            <Input type="email" name="email" placeholder="Seu e-mail pessoal" />
          </div>

          <Button variant="primary" size="full" type="submit">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  )
}
