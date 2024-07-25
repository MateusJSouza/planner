import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'

import { Button } from '../../../components/button'
import { Input } from '../../../components/input'

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  closeGuestsInput(): void
  openGuestsInput(): void
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="flex items-center gap-3 bg-zinc-900 shadow-shape px-4 rounded-xl h-16">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="text-zinc-400 size-5" />

        <Input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Para onde você vai?"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="text-zinc-400 size-5" />

        <Input type="text" disabled={isGuestsInputOpen} placeholder="Quando?" />
      </div>

      <div className="bg-zinc-800 w-px h-6" />

      {isGuestsInputOpen ? (
        <Button variant="secondary" onClick={closeGuestsInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button variant="primary" onClick={openGuestsInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}
