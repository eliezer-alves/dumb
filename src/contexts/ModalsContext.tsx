import { ReactNode, createContext, useState } from "react";

type ModalContextType = {
  showModal: boolean
  setShowModal(x: boolean): void
}

type ModalContextProviderProps = {
	children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextType);

export function ModalContextProvider(props: ModalContextProviderProps) {
  const [showModal, setShowModal] = useState(false)
  console.log(showModal);
  
  return (
		<ModalContext.Provider value={{ showModal, setShowModal }}>
			{props.children}
		</ModalContext.Provider>
	);
}