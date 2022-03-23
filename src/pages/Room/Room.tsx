import { useState } from "react"
import {useParams } from "react-router-dom"
import { TasksSideBar } from "../../components/Modals/TasksSideBar"
import { Page } from "../../components/Page"
import { Table } from "../../components/Table"
import { useRoom } from "../../hooks/useRoom"

type RoomParams = {
  id: string;
}
export function Room() {
  const params = useParams<RoomParams>()
  const roomCode = params.id ?? ''
  const { name, code, usersRoom} = useRoom(roomCode)

  const [showModal, setShowModal] = useState(false)

  return (
    <>
    {showModal && <TasksSideBar handleShowModal={setShowModal}/>}
    <Page>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-1/12 px-36 flex items-center justify-between">
          <h3 className="font-semibold">sala {name}</h3>
          <h3 onClick={() => {setShowModal(true)}} className="link">Tarefas</h3>
        </div>
        <div className="w-full h-11/12 flex-col-center">
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
    </>
  )
}