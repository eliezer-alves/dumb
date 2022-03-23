import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";
import { ButtonShowTasks } from "../ButtonShowTasks";
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
    <div className="w-full h-1/6 py-2 px-12 flex-between">
      <Logo />
      <div className="flex-center gap-8">
        <div className="flex-center gap-4">
          {code && <RoomCode code={code} />}
          { code && <ButtonShowTasks /> }
        </div>
        {user && <Profile avatar={user.avatar} name={user.name} />}
      </div>
    </div>
  )
}