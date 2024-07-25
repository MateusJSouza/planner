import { PlusIcon } from 'lucide-react'
import { useState } from 'react'

import { Activities } from './activities'
import { CreateActivityModal } from './create-activity-modal'
import { DestinationAndDateHeader } from './destination-and-date-header'
import { Guests } from './guests'
import { ImportantLinks } from './important-links'

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false)

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  return (
    <div className="space-y-8 mx-auto px-6 py-10 max-w-6xl">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-6">
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-3xl">Atividades</h2>

            <button
              type="button"
              onClick={openCreateActivityModal}
              className="flex items-center gap-2 bg-lime-300 hover:bg-lime-400 px-5 py-2 rounded-lg font-medium text-lime-950"
            >
              <PlusIcon className="size-5" />
              Cadastrar atividade
            </button>
          </div>

          <Activities />
        </div>

        <div className="space-y-6 w-80">
          <ImportantLinks />

          <div className="bg-zinc-800 w-full h-px" />

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  )
}
