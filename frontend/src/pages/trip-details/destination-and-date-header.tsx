import { Calendar, MapPin, Settings2 } from 'lucide-react'

import { Button } from '../../components/button'

export function DestinationAndDateHeader() {
  return (
    <div className="flex justify-between items-center bg-zinc-900 shadow-shape px-4 rounded-xl h-16">
      <div className="flex items-center gap-2">
        <MapPin className="text-zinc-400 size-5" />
        <span className="text-zinc-100">Florianópolis, Brasil</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="text-zinc-400 size-5" />
          <span className="text-zinc-100">17 a 23 de Agosto</span>
        </div>

        <div className="bg-zinc-800 w-px h-6" />

        <Button>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  )
}
