import { FormEvent, useState } from "react"

export default function NewTask() {
  const [taskName, setTaskName] = useState('')

  const handleCreateTask = (e: FormEvent) => {
    e.preventDefault()
    console.log(taskName)
    setTaskName('')    
  }
  return (
    <div className="w-full flex-col-center gap-2">
      <form onSubmit={handleCreateTask}>
       <textarea onChange={(e) => {setTaskName(e.target.value)}} rows={4} placeholder="Escreva aqui sua nova tarefa" value={taskName} className="w-full"></textarea>
       <button className="btn btn-primary w-full">Salvar</button>
      </form>
    </div>
  )
}