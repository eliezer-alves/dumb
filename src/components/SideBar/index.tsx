import { ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useModals } from '../../hooks/useModals'
import { Modal } from '../BaseModal'
import { Profile } from '../Profile'
import closeIcon from './images/close-icon.svg'
import infoIcon from './images/info-icon.svg'
import signOutIcon from './images/sign-out-icon.svg'
import loginIcon from './images/login-icon.svg'
import gitHubIcon from './images/github-icon.svg'


export function SideBar() {
  const { user, signInWithGoogle, signOut } = useAuth()
  const { setShowModal } = useModals()

  const handleSignOut = () => {
    setShowModal(false)
    signOut()
  }

  return (
    <Modal id={'side-bar'} className="flex justify-start">
      <div className="w-full flex flex-col justify-start bg-gray-50 divide-y">
        <div className="py-4 px-4 flex justify-between items-start mb-4">
          {user ? <Profile /> : <h2>Você não está logado 😕</h2>}
          <img
            onClick={() => {setShowModal(false)}}
            src={closeIcon}
            width="44px"
            alt="Fechar barra de tarefas"
            className="p-1 link rounded-full hover:bg-gray-200 flex justify-end"
          />
        </div>
        <div className="h-14 px-4 flex items-center gap-4">
          <img src={infoIcon} alt="Sair da página" />
          <span className="info">Sobre</span>
        </div>
        <div className="h-14 px-4 flex items-center gap-4">
          <img src={gitHubIcon} alt="Icone GitHub" />
          <a href="https://github.com/eliezer-alves/dumb" target="blank" className="info">Repositório GitHub</a>
        </div>
        <div className="h-14 px-4 flex items-center gap-4">
          <img src={loginIcon} alt="Sair da página" />
          {user
            ? <span onClick={handleSignOut} className="info">Sign Out</span>
            : <span onClick={signInWithGoogle} className="info">Sign In</span>}
        </div>
        <div className="h-14 px-3 pt-5 flex items-center gap-4">
          <button className="btn btn-primary w-full m-0">Fazer um PIX</button>
        </div>
      </div>
    </Modal>
  )
}