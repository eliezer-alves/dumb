import { useEffect, useState } from "react"
import { database } from '../services/firebase'

type Task = {
  title: string
}

type FaribaseTasks = Record<string, Task>

export function useTask(roomCode: string) {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const tasksRef = database.ref(`rooms/${roomCode}/tasks`)
    tasksRef.on('value', tasks => {
      const faribaseTasks: FaribaseTasks = tasks.val() ?? {}
      const parsedTasks = Object.entries(faribaseTasks).map(([key, value]) => {
        return {
          id: key,
          title: value.title,
        }
      })
      setTasks(parsedTasks);      
    })
  }, [roomCode])
  
  return { tasks }
}