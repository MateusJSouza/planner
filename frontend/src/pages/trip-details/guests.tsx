import { CircleDashed, UserCog } from 'lucide-react'

import { Button } from '../../components/button'

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <div className="space-y-1.5">
            <span className="block font-medium text-sm text-zinc-100">
              Jessica White
            </span>
            <span className="block text-xs text-zinc-400 truncate">
              jessica.white44@yahoo.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 cursor-pointer shrink-0 size-5" />
        </div>

        <div className="flex justify-between items-center">
          <div className="space-y-1.5">
            <span className="block font-medium text-sm text-zinc-100">
              Dr. Rita Pacocha
            </span>
            <span className="block text-xs text-zinc-400 truncate">
              lacy.stiedemann@hotmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 cursor-pointer shrink-0 size-5" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}
