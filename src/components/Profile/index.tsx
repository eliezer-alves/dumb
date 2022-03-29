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
    <div
      onClick={handleSignOut}
      className="
        h-14 px-4 flex justify-around items-center gap-4 link
        rounded-md border-l-2
        hover:bg-gray-100
    ">
      <img className="rounded-full w-12 h-12 mobile:hidden" src={avatar} alt="" />
      <span className="text-sm hidden mobile:block">{firstName}</span>
    </div>
  )
}