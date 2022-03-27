import { useRoom } from "../../hooks/useRoom"
import binIcon from './images/bin-icon.svg'
import cx from 'classnames';

export function TaskList() {
  const { tasks, taskToVote, deleteTask, handleTaskToVote } = useRoom()
  
  return (
    <div className="w-full flex-col-center gap-4">
      {
        tasks.map(task =>{
          return (
            <div key={task.id}
              className={cx('w-full p-4 pt-2 flex flex-col bg-gray-100 rounded-lg shadow-md',
                {'border-2 border-primary-200 bg-primary-50': (task.id == taskToVote?.id)}
              )}>
              <div onClick={() => deleteTask(task.id)} className="w-full flex items-center justify-end">
                <img src={binIcon} width="42" alt="" className="p-2 link rounded-full hover:bg-gray-200" />
              </div>              
              <h3 className="mb-6">{task.title}</h3>
              <div className="w-full flex items-center justify-between">
                {(task.id == taskToVote?.id)
                  ? <button onClick={() => handleTaskToVote(undefined)} className="btn-sm btn-primary text-sm font-sans min-w-24">retirar</button>
                  : <button onClick={() => handleTaskToVote(task)} className="btn-sm btn-secondary text-sm font-sans min-w-24">
                    {task.average ? 'votar novamente' : 'votar'}
                  </button>
                }
                
                <span className="btn-sm btn-secondary text-sm font-sans">{task.average}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}