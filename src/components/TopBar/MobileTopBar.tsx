import { useRoom } from "../../hooks/useRoom";
import { ButtonShowSideBar } from "../ButtonShowSideBar";
import { ButtonShowTasks } from "../ButtonShowTasks";
import { Logo } from "../Logo";

export function MobileTopBar() {
  const { code, name } = useRoom();

  return (
    <div className="w-full h-1/10 p-4 justify-start hidden mobile:block">
      <div className="w-full h-14 flex justify-between items-center">
        {!code && <Logo />}
        { <ButtonShowSideBar /> }
        { name && <span>{name}</span> }
        { code && <ButtonShowTasks /> }
      </div>
    </div>
  )
}