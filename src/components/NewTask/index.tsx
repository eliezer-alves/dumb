import { FormEvent, useState } from "react"
import { useRoom } from "../../hooks/useRoom";


export default function NewTask() {
  const { createTask } = useRoom()
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