import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";
import { ButtonShowTasks } from "../ButtonShowTasks";
import { Logo } from "../Logo";
import { Profile } from "../Profile";
import { RoomCode } from "../RoomCode";

export function WebTopBar() {
  const { code } = useRoom();

  return (
    <div className="w-full h-1/6 py-2 px-12 flex-between mobile:hidden">      
      <Logo />
      <div className="flex-center gap-8">
        <div className="flex-center gap-4">
          <div className="xsm:hidden">
          { code && <RoomCode code={code} />}
          </div>
          { code && <ButtonShowTasks /> }
        </div>
        <div className="xsm:hidden">
          <Profile />
        </div>
      </div>
    </div>
  )
}