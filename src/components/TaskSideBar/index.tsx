import { useModals } from '../../hooks/useModals'
import NewTask from '../NewTask'
import closeIcon from './images/close-icon.svg'
import { Modal } from "../BaseModal"
import { useRoom } from '../../hooks/useRoom'
import { TaskList } from '../TaskList'

export function TaskSideBar() {
  const { tasks } = useRoom()
  const { setShowModal } = useModals()

  console.log(tasks);  

  return (
    <Modal>
      <div className="w-full h-full flex justify-end">
        <div className="h-full min-w-1/5 flex flex-col justify-start gap-4 bg-gray-50">
          <div className="h-1/12 p-10 flex items-center justify-between">
            <h2>Tarefas</h2>
            <img
              onClick={() => {setShowModal(false)}}
              src={closeIcon}
              width="54px"
              alt="Fechar barra de tarefas"
              className="p-1 link rounded-full hover:bg-gray-200" />
          </div>
          <div className="h-3/5 px-5 py-5 overflow-y-scroll">
            <TaskList />
          </div>
          <div className="px-5">
            <NewTask/>
          </div>
        </div>
      </div>
    </Modal>
  )
}