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
      {/*
        <div className="flex-center">
        <img src={user.avatar} alt="" className="rounded-full w-12 h-12" />
        </div>
      */}
      <div className="mt-4 flex-center rounded-lg w-14 h-24 bg-gray-300 shadow-lg">
        {user.voted && (
          <img src={backgroundImg2} alt="" className="rounded-lg w-14 h-24" />
        )}
      </div>
      <div className="flex-center mt-4">
          <span className="font-semibold text-lg">{user.name.split(' ')[0]}</span>
      </div>
    </div>
  )
}