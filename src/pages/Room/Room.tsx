import { useState } from "react"
import {useParams } from "react-router-dom"
import { TaskSideBar } from "../../components/TaskSideBar"
import { Page } from "../../components/Page"
import { Table } from "../../components/Table"
import { useModals } from "../../hooks/useModals"
import { useRoom } from "../../hooks/useRoom"

type RoomParams = {
  id: string;
}
export function Room() {
  const params = useParams<RoomParams>()
  const roomCode = params.id ?? ''
  const { name, code, usersRoom} = useRoom(roomCode)
  const { showModal, setShowModal } = useModals()
  

  return (
    <>
    {showModal && <TaksSideBar />}
    <Page>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-1/12 flex-center">Bem vindo à sala&nbsp;<strong>{name}</strong>!</div>
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