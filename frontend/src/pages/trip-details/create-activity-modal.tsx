import { Tag, User, X } from 'lucide-react'

import { Button } from '../../components/button'
import { Input } from '../../components/input'

interface CreateActivityModalProps {
  closeCreateActivityModal(): void
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/60">
      <div className="space-y-5 bg-zinc-900 shadow-shape px-6 py-5 rounded-xl w-[640px]">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">Cadastrar atividade</h2>

            <button onClick={closeCreateActivityModal}>
              <X className="size-5" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form className="space-y-3">
          <div className="flex items-center gap-2 border-zinc-800 bg-zinc-950 px-4 border rounded-lg h-14">
            <Tag className="text-zinc-400 size-5" />

            <Input type="text" name="title" placeholder="Qual a atividade" />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex flex-1 items-center gap-2 border-zinc-800 bg-zinc-950 px-4 border rounded-lg h-14">
              <User className="text-zinc-400 size-5" />

              <Input
                type="datetime-local"
                name="occurs_at"
                placeholder="Data e horário da atividade"
              />
            </div>
          </div>

          <Button variant="primary" size="full">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}
