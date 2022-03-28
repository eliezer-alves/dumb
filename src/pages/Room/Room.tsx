import { TaskSideBar } from "../../components/TaskSideBar"
import { Page } from "../../components/Page"
import { Table } from "../../components/Table"
import { Deck } from "../../components/Deck"
import { UserRoom } from "../../components/UserRoom"

import { useModals } from "../../hooks/useModals"
import { useRoom } from "../../hooks/useRoom"
import { useAuth } from "../../hooks/useAuth"

import cx from 'classnames';
import { useState } from "react"

export function Room() {
  const { user } = useAuth()
  const { name, usersRoom, currentUserRoom, taskToVote, handleCloseVote } = useRoom()
  const { showModal } = useModals()


  return (
    <>
      {showModal && <TaskSideBar />}
      <Page>
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-full pt-10 flex flex-col items-center justify-between">
            <div className="w-full flex-center gap-8">
              {usersRoom.map((userRoom) => {
                if (userRoom.id == user?.id) return

                return (
                  <UserRoom key={userRoom.id} user={userRoom} />
                )
              })}
            </div>
            <Table>
              <div className="w-full flex-center mb-5">
              {taskToVote
                ? (<div className="flex-col-center gap-2">Votando<h2>{taskToVote.title}</h2></div>)
                : <span className="text-center">Nenhuma tarefa sendo votada no momento</span>
              }
              </div>
              <button
                onClick={handleCloseVote}
                type="submit"
                className={cx(
                  { 'btn btn-primary': taskToVote },
                  { 'btn btn-secondary border-3 text-gray-500 hover:cursor-no-drop': !taskToVote },
                )}
              >&emsp;Encerrar a rodada&emsp;</button>
            </Table>
            {currentUserRoom && <UserRoom key={currentUserRoom?.id} user={currentUserRoom} />}
            <Deck />
          </div>
        </div>
      </Page>
    </>
  )
}