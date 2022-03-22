import {useParams } from "react-router-dom"
import { Page } from "../../components/Page"
import { Table } from "../../components/Table"
import { useRoom } from "../../hooks/useRoom"

type RoomParams = {
  id: string;
}
export function Room() {
  const params = useParams<RoomParams>();
  const roomCode = params.id ?? '';
  const { name, code, usersRoom} = useRoom(roomCode);
  console.log(usersRoom)

  return (
    <Page>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-1/10 flex items-center">
          <h3 className="font-semibold ml-40">sala {name}</h3>
        </div>
        <div className="w-full h-9/10 flex-col-center">
          <div className="w-full flex-center gap-4">
          {usersRoom.map(user => {
            return (              
              <img key={user.id} src={user.avatar} alt="" className="rounded-full w-12 h-12"/>
            )
          })}
          </div>
          <Table content={'My table'} />
        </div>
      </div>
    </Page>
  )
}