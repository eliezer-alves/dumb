import { useModals } from '../../hooks/useModals'
import NewTask from '../NewTask'
import closeIcon from './images/close-icon.svg'
import { Modal } from '../BaseModal'
import { TaskList } from '../TaskList'

export function TaskSideBar() {
  const { setShowModal } = useModals()

  return (
    <Modal id={'tasks'} className="w-full h-full flex justify-end">
      <div className="h-full px-4 flex flex-col justify-start bg-gray-50">
        <div className="min-h-1/12 p-2 flex items-center justify-between mobile:px-0 mobile:py-5">
          <h2>&nbsp;Tarefas</h2>
          <img
            onClick={() => {setShowModal(false)}}
            src={closeIcon}
            width="44px"
            alt="Fechar barra de tarefas"
            className="p-1 link rounded-full hover:bg-gray-200" />
        </div>
        <div className="px-5 pb-2 overflow-y-auto mobile:px-1">
          <TaskList />
        </div>
        <div className="h-1/3 px-4 pt-4 pb-8 mobile:pl-0 mobile:pr-1">
          <NewTask/>
        </div>
      </div>
    </Modal>
  )
}