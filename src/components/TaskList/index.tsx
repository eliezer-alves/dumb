import { useRoom } from "../../hooks/useRoom"
import binIcon from './images/bin-icon.svg'

export function TaskList() {
  const { tasks } = useRoom()
  return (
    <div className="w-full flex-col-center gap-4">
      {
        tasks.map(task =>{
          return (
            <div className="w-full p-4 pt-2 flex flex-col bg-gray-100 rounded-lg shadow-md">
              <div className="w-full flex items-center justify-end">
                <img src={binIcon} width="42" alt="" className="p-2 link rounded-full hover:bg-gray-200" />
              </div>              
              <h3 className="mb-6">{task.title}</h3>
              <div className="w-full flex items-center justify-between">
                <button className="btn-sm btn-secondary text-sm font-sans w-24">votar</button>
                <span className="btn-sm btn-secondary text-sm font-sans">0</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}