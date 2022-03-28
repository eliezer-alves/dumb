import backgroundImg from './images/tanjiro.png'
import backgroundImg2 from './images/urokodaki.jpg'

type UserRoom = {
  id: string
  name: string
  avatar: string
  voted: boolean
}

export function UserRoom({ user }: any) {

  return (
    <div className="fex-col-center">
      <img src={user.avatar} alt="" className="rounded-full w-12 h-12" />
      <div className="mt-2 flex-center rounded-lg w-12 h-20 bg-gray-300 shadow-lg">
        {user.voted && (
          <img src={backgroundImg2} alt="" className="rounded-lg w-12 h-20" />
        )}
      </div>
    </div>
  )
}