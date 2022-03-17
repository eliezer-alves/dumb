import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type UserProps = {
	id?: string;
	name?: string;
	avatar: string;
}

export function Profile({id, name, avatar}: UserProps) {  
  const navigate = useNavigate();
  const { signOut } = useAuth()
  
  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div onClick={handleSignOut} className="py-2 px-4 flex justify-around items-center gap-2 font-fredoka link rounded-md hover:bg-gray-100">
      <img className="rounded-full w-12 h-12" src={avatar} alt="" />
      <span className="font-semibold text-secondary-400 text-2xl">Sair</span>
    </div>
  )
}