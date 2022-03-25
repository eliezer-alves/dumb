import { TaskSideBar } from "../../components/TaskSideBar"
import { Page } from "../../components/Page"
import { Table } from "../../components/Table"
import { useModals } from "../../hooks/useModals"
import { useRoom } from "../../hooks/useRoom"
import { Deck } from "../../components/Deck"

export function Room() {
  const { name, usersRoom, taskToVote} = useRoom()
  const { showModal } = useModals()
  

  return (
    <>
    {showModal && <TaskSideBar />}
    <Page>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-1/12 flex-center">Bem vindo à sala&nbsp;<strong>{name}</strong>!</div>
        <div className="w-full h-11/12 pt-10 flex flex-col items-center justify-between">
          <div className="w-full flex-center gap-4">
            {usersRoom.map(user => {
              return (              
                <img key={user.id} src={user.avatar} alt="" className="rounded-full w-12 h-12"/>
              )
            })}
          </div>
          <Table>
            {taskToVote
              ? (<div className="flex-col-center gap-2">Votando<h2>{taskToVote.title}</h2></div>)
              : <span>Nenhuma tarefa sendo votada no momento</span>
            }
          </Table>
          <Deck />
        </div>
      </div>
    </Page>
    </>
  )
}