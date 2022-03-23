import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
}

export function Modal({children}: ModalProps) {
  return (
    <div className="z-10 absolute w-screen h-screen bg-transparent-600 flex-center">
      {children}
    </div>
  )
}