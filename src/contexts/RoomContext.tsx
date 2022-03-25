import { createContext, ReactNode, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { database } from '../services/firebase'

type User = {
	id: string
	name: string
	avatar: string
}

// type FaribaseUsersRoom = Record<string, {name: string}>
type Vote = {
  value: number
}

type FaribaseTaskVotes = Record<string, Vote>

type Task = {
  id: string
  title: string
  votes: FaribaseTaskVotes|undefined
  numberOfVotes: number|undefined
  sumOfVotes: number|undefined
  average: number|undefined
}

type FaribaseTasks = Record<string, Task>


type RoomContextProviderProps = {
  children: ReactNode
}

type RoomParams = {
  id: string
}

type RoomContextType = {
  name: string
  code: string
  usersRoom: User[]
  tasks: Task[]
  taskToVote: Task|undefined
  createTask(title:string): void
  deleteTask(taskId:string): void
  setTaskToVote(task:Task|undefined): void
  handleTaskVote(value: number, taskId: string): void
}

export const RoomContext = createContext({} as RoomContextType)

export function RoomContextProvider({ children }: RoomContextProviderProps) {  
  const { user } = useAuth()
  const params = useParams<RoomParams>()
  const roomCode = params.id ?? ''
  
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [usersRoom, setUsersRoom] = useState<User[]>([])
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskToVote, setTaskToVote] = useState<Task|undefined>()

  useEffect(() => {
    if (!user) return    

    database.ref(`rooms/${roomCode}/users/${user.id}`).on('value', userRoom => {
      if (!userRoom.val()) {
        database.ref(`rooms/${roomCode}/users`).child(user.id).set({
          name: user.name,
        })
      }      
    })

    const roomRef = database.ref(`rooms/${roomCode}`)
    roomRef.on('value', room => {
      const dataRoom = room.val()
      
      if (dataRoom) {
        setName(dataRoom.name)
        setCode(roomCode)
        setUsersRoom([])
        
        Object.entries(dataRoom.users).map(([key, value]) => {          
          handleUserRoom(key)
        })

        const faribaseTasks: FaribaseTasks = dataRoom.tasks ?? {}
        const parsedTasks = Object.entries(faribaseTasks).map(([key, value]) => {
          
          var sumOfVotes = 0
          var numberOfVotes = 0
          var average = 0

          if (value.votes){
            const faribaseTaskVotes: FaribaseTaskVotes = value.votes ?? {}
            const parsedVotes = Object.entries(faribaseTaskVotes).map(([key, value]) => {
              sumOfVotes += value.value            
            })

            numberOfVotes = parsedVotes.length
            average = Math.round(sumOfVotes/numberOfVotes)
          }
          
          return {
            id: key,
            title: value.title,
            votes: undefined,
            numberOfVotes: numberOfVotes,
            sumOfVotes: sumOfVotes,
            average: average,
          }
        })
        setTasks(parsedTasks)

      }
    })    
  
    return () => {}
  }, [roomCode, user?.id])

  function handleUserRoom(userId: string) {
    database.ref(`users/${userId}`).on('value', user => {
      setUsersRoom((usersRoom:User[]) => {
        return [
          user.val(),
          ...usersRoom,
        ]
      })
    })    
  }

  const createTask = (title: string) => {
    database.ref(`rooms/${roomCode}/tasks`).push({
      title: title,
    })
  }

  const deleteTask = (taskId: string) => {
    database.ref(`rooms/${roomCode}/tasks/${taskId}`).remove()
  }

  const handleTaskVote = (value:number, taskId: string) => {
    if (!user) return
    
    const taskVotesRef = database.ref(`rooms/${roomCode}/tasks/${taskId}/votes`)
    taskVotesRef.child(user.id).set({
      value: value,
    })
  }

  return (
    <RoomContext.Provider value={{name, code, usersRoom, tasks, taskToVote, createTask, deleteTask, setTaskToVote, handleTaskVote}}>
      {children}
    </RoomContext.Provider>
  )
}