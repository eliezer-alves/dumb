import { TaskSideBar } from "../../components/TaskSideBar"
import { Page } from "../../components/Page"
import { Table } from "../../components/Table"
import { useModals } from "../../hooks/useModals"
import { useRoom } from "../../hooks/useRoom"

export function Room() {
  const { name, usersRoom, taskVote} = useRoom()
  const { showModal } = useModals()
  

  return (
    <>
    {showModal && <TaskSideBar />}
    <Page>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-1/12 flex-center">Bem vindo à sala&nbsp;<strong>{name}</strong>!</div>
        <div className="w-full h-11/12 mt-20 flex flex-col items-center gap-24">
          <div className="w-full flex-center gap-4">
            {usersRoom.map(user => {
              return (              
                <img key={user.id} src={user.avatar} alt="" className="rounded-full w-12 h-12"/>
              )
            })}
          </div>
          <Table>
            {taskVote
              ? (<div className="flex-col-center gap-2">Votando<h2>{taskVote.title}</h2></div>)
              : <span>Nenhuma tarefa sendo votada no momento</span>
            }
          </Table>
        </div>
      </div>
    </Page>
    </>
  )
}