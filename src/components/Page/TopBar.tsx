import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";
import { Logo } from "../Logo";
import { Profile } from "../Profile";
import { RoomCode } from "../RoomCode";

type RoomParams = {
  id: string;
}

export function TopBar() {
  const {user} = useAuth();
  
  const params = useParams<RoomParams>();
  const roomCode = params.id ?? '';
  const { name, code } = useRoom(roomCode);  

  return (
    <div className="w-full h-1/6 py-4 px-12 flex-between">
      <Logo />
      <div className="flex-center gap-4 divide-x-2">
        {code && <RoomCode code={code} />}
        {user && <Profile avatar={user.avatar} name={user.name} />}
      </div>
    </div>
  )
}