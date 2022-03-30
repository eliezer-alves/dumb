import { ReactNode, useState } from "react";
import { useModals } from "../../hooks/useModals";

type ModalProps = {
  id: string;
  styleClass?: string;
  children: ReactNode;
}

export function Modal({id, styleClass, children}: ModalProps) {
  const { showModal, setShowModal } = useModals()

  const handleShowModal = (e: any) => {
    if (e.target.getAttribute('data-value') == 'base-modal') {
      setShowModal(false)
    }
  }

  
  
  
  if (showModal != id) return (<></>)

  return (
    <div key={id}
      onClick={handleShowModal}
      data-value={'base-modal'}
      className={`
        z-10 absolute
        w-screen h-screen 
        bg-transparent-600
        ${styleClass ?? 'flex justify-center items-start pt-10'}
    `}>      
      {children}      
    </div>
  )
}