import { useModals } from '../../hooks/useModals'
import fileIcom from './images/file-icon.svg'

export function ButtonShowTasks() {
  const { showModal, setShowModal } = useModals()
  console.log(showModal)
  
  return (
    <div
      onClick={() => setShowModal(!showModal)}
      className="
        h-14 p-2 flex-center
        border-2 border-primary-300 rounded-lg
        link hover:opacity-70 hover:bg-gray-100 active:opacity-100
      ">
      <img src={fileIcom} alt="Tarefas" />
    </div>
  )
}