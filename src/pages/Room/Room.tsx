import { TaskSideBar } from "../../components/TaskSideBar"
import { Page } from "../../components/Page"
import { Table } from "../../components/Table"
import { Deck } from "../../components/Deck"
import { UserRoom } from "../../components/UserRoom"

import { useRoom } from "../../hooks/useRoom"
import { useAuth } from "../../hooks/useAuth"

import cx from 'classnames';
import { VotingResult } from "../../components/VotingResult"
import { useEffect } from "react"
import { useModals } from "../../hooks/useModals"

export function Room() {
  const { user, signInWithGoogle } = useAuth()
  const { setShowModal } = useModals()
  const { name, usersRoom, currentUserRoom, taskToVote, handleCloseVote } = useRoom()

  useEffect(() => {
    if (currentUserRoom?.showResult) {
      setShowModal('voting-result')
    }
    return () => {}
  }, [currentUserRoom])


  if (!user) {
    return (
      <>
        <div className="w-full px-10 h-full flex-col-center gap-8">
          <h2>Parece que você ainda não está logado 😕</h2>
          <button onClick={signInWithGoogle} className="btn btn-primary">Entrar com Google 😏</button>
        </div>
      </>
    )
  }

  return (
    <>

      {name ? (
        <>
        <TaskSideBar />
        <VotingResult />
        <Page>          
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-full flex flex-col items-center justify-between">
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
                >Encerrar a rodada</button>
              </Table>
              {currentUserRoom && <UserRoom key={currentUserRoom?.id} user={currentUserRoom} />}
              {/* <div className="max-w-full flex justify-start items-center overflow-x-scroll"> */}
              <Deck />
              {/* </div> */}
            </div>
          </div>
        </Page>
        </>
      )
        : (
          <div className="w-full h-full px-10 flex-center">
            <h2>404 - Sala não encontrada 🤔</h2>
          </div>
        )
      }
    </>
  )
}