import { ReactNode, useState } from "react";
import { useModals } from "../../hooks/useModals";

type ModalProps = {
  id: string;
  children: ReactNode;
}

export function Modal({id, children}: ModalProps) {
  const { showModal, setShowModal } = useModals()

  const handleShowModal = (e: any) => {    
    if (e.target.classList.contains('modal')) {
      setShowModal(false)
    }    
  }
  
  if (showModal != id) return (<></>)

  return (
    <div key={id} onClick={handleShowModal} className="baseModal z-10 absolute w-screen h-screen bg-transparent-600 flex-center">
      {children}
    </div>
  )
}