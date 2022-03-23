import { useModals } from '../../hooks/useModals'
import closeIcon from './images/close-icon.svg'
import { Modal } from "./Modal"

export function TasksSideBar() {
  const { setShowModal } = useModals()

  return (
    <Modal>
      <div className="w-full h-full flex justify-end">
        <div className="h-full min-w-1/3 flex flex-col justify-between px-10 py-10 bg-gray-50">
          <div className="flex items-center justify-between">
            <h2>Tarefas</h2>
            <img
              onClick={() => {setShowModal(false)}}
              src={closeIcon}
              width="54px"
              alt="Fechar barra de tarefas"
              className="p-1 link rounded-full hover:bg-gray-200" />
          </div>
        </div>
      </div>
    </Modal>
  )
}