import { Modal } from '../BaseModal'


export function SideBar() {

  return (
    <Modal id={'side-bar'} className="flex justify-start">
      <div className="w-1/5 h-full px-4 flex flex-col justify-start bg-gray-50">
        <h2>Menu</h2>
      </div>
    </Modal>
  )
}