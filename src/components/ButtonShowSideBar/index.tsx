import { useModals } from '../../hooks/useModals'
import sideBarIcon from './images/side-bar-icon.svg'

export function ButtonShowSideBar() {
  const { showModal, setShowModal } = useModals()
  
  return (
    <div
      className="
        h-14 w-14 p-2 flex-center
        rounded-full
        hover:opacity-70 active:bg-gray-100 active:opacity-100
      ">
      <img src={sideBarIcon} alt="Menu Lateral"/>
    </div>
  )
}