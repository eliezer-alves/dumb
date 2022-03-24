import { useParams } from 'react-router-dom'
import { useModals } from '../../hooks/useModals'
import { useTask } from '../../hooks/useTask'
import NewTask from '../NewTask'
import closeIcon from './images/close-icon.svg'
import { Modal } from "../BaseModal"

type RoomParams = {
  id: string;
}

export function TaskSideBar() {
  const params = useParams<RoomParams>()
  const roomCode = params.id ?? ''
  const { tasks } = useTask(roomCode)
  const { setShowModal } = useModals()

  console.log(tasks);
  

  return (
    <Modal>
      <div className="w-full h-full flex justify-end">
        <div className="h-full min-w-1/5 px-10 py-10 flex flex-col justify-start gap-4 bg-gray-50">
          <div className="mb-4 flex items-center justify-between">
            <h2>Tarefas</h2>
            <img
              onClick={() => {setShowModal(false)}}
              src={closeIcon}
              width="54px"
              alt="Fechar barra de tarefas"
              className="p-1 link rounded-full hover:bg-gray-200" />
          </div>
          <NewTask/>
        </div>
      </div>
    </Modal>
  )
}