import { useRoom } from "../../hooks/useRoom"
import binIcon from './images/bin-icon.svg'

export function TaskList() {
  const { tasks, taskVote, deleteTask, setTaskVote } = useRoom()
  
  return (
    <div className="w-full flex-col-center gap-4">
      {
        tasks.map(task =>{
          return (
            <div key={task.id} className="w-full p-4 pt-2 flex flex-col bg-gray-100 rounded-lg shadow-md">
              <div onClick={() => deleteTask(task.id)} className="w-full flex items-center justify-end">
                <img src={binIcon} width="42" alt="" className="p-2 link rounded-full hover:bg-gray-200" />
              </div>              
              <h3 className="mb-6">{task.title}</h3>
              <div className="w-full flex items-center justify-between">
                {(task.id == taskVote?.id)
                  ? <button onClick={() => setTaskVote(undefined)} className="btn-sm btn-primary text-sm font-sans w-24">retirar</button>
                  : <button onClick={() => setTaskVote(task)} className="btn-sm btn-secondary text-sm font-sans w-24">votar</button>
                }
                
                <span className="btn-sm btn-secondary text-sm font-sans">0</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}