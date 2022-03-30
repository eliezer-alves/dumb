import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import signOutIcon from './images/sign-out-icon.svg';


export function Profile() {
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const { user } = useAuth();
  
  if (!user) return(<></>)

  const firstName = user.name.split(' ')[0]
  const lastName = user.name.replace(firstName + ' ', '')
  
  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div
      onClick={handleSignOut}
      className="
        h-20 px-4 flex justify-around items-center gap-4 link
        rounded-md
        hover:bg-gray-100
        mobile:px-0
    ">
      <img className="rounded-full w-14 h-14" src={user.avatar} alt="" />
      <div className="flex flex-col">
        <span className="text-xl font-semibold">{firstName}</span>
        <span className="text-sm text-gray-500">{lastName}</span>
      </div>
    </div>
  )
}