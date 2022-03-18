import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import signOutIcon from './images/sign-out-icon.svg';

type UserProps = {
	id?: string;
	name?: string;
	avatar: string;
}

export function Profile({id, name, avatar}: UserProps) {  
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const firstName = name?.split(' ')[0]
  
  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div onClick={handleSignOut} className="py-2 px-4 flex justify-around items-center gap-4 link rounded-md hover:bg-gray-100 border-x-2">
      <img className="rounded-full w-12 h-12" src={avatar} alt="" />
      <span className="text-2xl font-semibold">{firstName}</span>
      <img className="" src={signOutIcon} alt="" />
      {/* <span className="font-semibold text-secondary-400 text-2xl">Sair</span> */}
    </div>
  )
}