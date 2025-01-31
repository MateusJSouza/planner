import { Link2, Plus } from 'lucide-react'

import { Button } from '../../components/button'

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="https://www.airbnb.com.br/rooms/31283190-3820-318319"
              className="block text-xs text-zinc-400 hover:text-zinc-200 truncate"
            >
              https://www.airbnb.com.br/rooms/31283190-3820-318319
            </a>
          </div>
          <Link2 className="text-zinc-400 cursor-pointer shrink-0 size-5" />
        </div>

        <div className="flex justify-between items-center">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="https://www.airbnb.com.br/rooms/31283190-3820-318319"
              className="block text-xs text-zinc-400 hover:text-zinc-200 truncate"
            >
              https://www.airbnb.com.br/rooms/31283190-3820-318319
            </a>
          </div>
          <Link2 className="text-zinc-400 cursor-pointer shrink-0 size-5" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  )
}
