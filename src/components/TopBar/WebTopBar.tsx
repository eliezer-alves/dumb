import { useRoom } from "../../hooks/useRoom";
import { ButtonShowTasks } from "../ButtonShowTasks";
import { Logo } from "../Logo";
import { Profile } from "../Profile";
import { RoomCode } from "../RoomCode";

export function WebTopBar() {
  const { code } = useRoom();

  return (
    <div className="w-full h-1/6 py-2 px-6 lg:px-12 flex-between mobile:hidden">
      <div className="hidden lg:block">
        <Logo />
      </div>
      <div className="flex-between gap-8 w-full lg:w-auto lg:flex-center">
        <div className="flex-center gap-4">
          { code && <RoomCode code={code} />}
          { code && <ButtonShowTasks /> }
        </div>
        <Profile />
      </div>
    </div>
  )
}