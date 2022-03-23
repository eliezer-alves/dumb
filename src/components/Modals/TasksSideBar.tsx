import closeIcon from './images/close-icon.svg'
import { Modal } from "./Modal";

export function TasksSideBar() {
  return (
    <Modal>
      <div className="w-full h-full flex justify-end">
        <div className="h-full min-w-1/3 flex flex-col justify-between px-6 py-6 bg-gray-50">
          <div className="flex justify-between">
            <h2>Tarefas</h2>
            <img src={closeIcon} width="54px" alt="Fechar barra de tarefas" className="link" />
          </div>
        </div>
      </div>
    </Modal>
  )
}