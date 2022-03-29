import { useModals } from '../../hooks/useModals'
import { Modal } from '../BaseModal'


export function SideBar() {

  return (
    <Modal id={'side-bar'}>
      <div className="modal w-full h-full flex justify-start">
        <div className="modalWindow w-1/5 h-full px-4 flex flex-col justify-start bg-gray-50">
          <h2>Menu</h2>
        </div>
      </div>
    </Modal>
  )
}