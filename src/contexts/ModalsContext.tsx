import { ReactNode, createContext, useState } from "react";

type ModalContextType = {
  showModal: string|boolean
  setShowModal(idModal: string|boolean): void
}

type ModalContextProviderProps = {
	children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextType);

export function ModalContextProvider(props: ModalContextProviderProps) {
  const [showModal, setShowModal] = useState<string|boolean>(false)
  
  return (
		<ModalContext.Provider value={{ showModal, setShowModal }}>
			{props.children}
		</ModalContext.Provider>
	);
}