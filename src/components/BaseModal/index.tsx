import { ReactNode } from "react";
import { useModals } from "../../hooks/useModals";

type ModalProps = {
  children: ReactNode;
}

export function Modal({children}: ModalProps) {
  const { setShowModal } = useModals()

  const handleShowModal = (e: any) => {
    
    if (e.target.classList.contains('modal')) {
      setShowModal(false)
    }

    
  }

  return (
    <div onClick={handleShowModal} className="baseModal z-10 absolute w-screen h-screen bg-transparent-600 flex-center">
      {children}
    </div>
  )
}