import { useAuth } from "../../hooks/useAuth";
import { Logo } from "../Logo";
import { Profile } from "../Profile";

export function TopBar() {
  const {user} = useAuth();

  return (
    <div className="w-full h-1/6 py-4 px-12 flex-between">
      <Logo />
      {user && <Profile avatar={user.avatar} />}
    </div>
  )
}