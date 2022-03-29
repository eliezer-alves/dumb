import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";
import { ButtonShowTasks } from "../ButtonShowTasks";
import { Logo } from "../Logo";
import { Profile } from "../Profile";
import { RoomCode } from "../RoomCode";

export function WebTopBar() {
  const { user } = useAuth();  
  const { code } = useRoom();

  return (
    <div className="w-full h-1/6 py-2 px-12 flex-between mobile:hidden">
      <Logo />
      <div className="flex-center gap-8">
        <div className="flex-center gap-4">
          { code && <RoomCode code={code} />}
          { code && <ButtonShowTasks /> }
        </div>
        {user && <Profile avatar={user.avatar} name={user.name} />}
      </div>
    </div>
  )
}