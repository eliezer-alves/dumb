import { useAuth } from "../../hooks/useAuth";
import { useModals } from '../../hooks/useModals'
import { Modal } from '../BaseModal'
import { Profile } from '../Profile'
import closeIcon from './images/close-icon.svg'
import copyIcon from './images/copy-icon.svg'
import infoIcon from './images/info-icon.svg'
import loginIcon from './images/login-icon.svg'
import gitHubIcon from './images/github-icon.svg'
import { useParams } from "react-router-dom";

type RoomParams = {
  id: string
}

export function SideBar() {  
  const { user, signInWithGoogle, signOut } = useAuth()
  const { setShowModal } = useModals()
  
  const params = useParams<RoomParams>()
  const roomCode = params.id ?? ''
  console.log(roomCode);
  

  const handleSignOut = () => {
    setShowModal(false)
    signOut()
  }

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(roomCode)
  }

  return (
    <Modal id="side-bar" className="flex justify-start">
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
        {roomCode && (          
          <div onClick={copyRoomCodeToClipboard} className="h-14 px-4 flex items-center gap-4 active:opacity-40">
            <div className="w-[25px] h-[25px] bg-gray-400 rounded-md p-1">
              <img src={copyIcon} alt="Sair da página" />
            </div>
            <span className="info">{roomCode}</span>
          </div>
        )}
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
      </div>
    </Modal>
  )
}