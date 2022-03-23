import { FormEvent, useState } from "react"
import { useParams } from "react-router-dom"
import { useRoom } from "../../hooks/useRoom"

type RoomParams = {
  id: string;
}
export default function NewTask() {
  const params = useParams<RoomParams>()
  const roomCode = params.id ?? ''
  const { createTask } = useRoom(roomCode)
  const [taskName, setTaskName] = useState('')

  const handleCreateTask = (e: FormEvent) => {
    e.preventDefault()
    createTask(taskName)
    setTaskName('')    
  }
  return (
    <div className="w-full flex-col-center gap-2">
      <form onSubmit={handleCreateTask}>
        <textarea
          onChange={(e) => {setTaskName(e.target.value)}}
          rows={4}
          value={taskName}
          placeholder="Escreva aqui sua nova tarefa"
          className="w-full">
        </textarea>

       <button className="btn btn-primary w-full">Salvar</button>
      </form>
    </div>
  )
}