import { createContext, ReactNode, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { database } from '../services/firebase'

type UserRoom = {
	id: string
	name: string
	avatar: string
}

type FaribaseUsersRoom = Record<string, UserRoom>

// type FaribaseUsersRoom = Record<string, {name: string}>
type Vote = {
  value: number
}

type FaribaseTaskVotes = Record<string, Vote>

type Task = {
  id: string
  title: string
  votes: any
  numberOfVotes: number|undefined
  sumOfVotes: number|undefined
  average: number|undefined
}

type FaribaseTask = {
  id: string
  title: string
  votes: FaribaseTaskVotes|undefined
  numberOfVotes: number|undefined
  sumOfVotes: number|undefined
  average: number|undefined
}


type FaribaseTasks = Record<string, FaribaseTask>


type RoomContextProviderProps = {
  children: ReactNode
}

type RoomParams = {
  id: string
}

type RoomContextType = {
  name: string
  code: string
  usersRoom: UserRoom[]
  tasks: Task[]
  taskToVote: Task|undefined
  createTask(title:string): void
  deleteTask(taskId:string): void
  handleTaskToVote(task:Task|undefined): void
  handleVote(value: number, taskId: string): void

}

export const RoomContext = createContext({} as RoomContextType)

export function RoomContextProvider({ children }: RoomContextProviderProps) {  
  const { user } = useAuth()
  const params = useParams<RoomParams>()
  const roomCode = params.id ?? ''
  
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [usersRoom, setUsersRoom] = useState<UserRoom[]>([])
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskToVote, setTaskToVote] = useState<Task|undefined>()
  const [taskVote, setTaskVote] = useState<Vote|undefined>()

  useEffect(() => {
    if (!user) return    

    database.ref(`rooms/${roomCode}/users/${user.id}`).on('value', userRoom => {
      if (!userRoom.val()) {
        database.ref(`rooms/${roomCode}/users`).child(user.id).set(user)
      }      
    })

    const roomRef = database.ref(`rooms/${roomCode}`)
    roomRef.on('value', room => {
      const dataRoom = room.val()
      
      if (dataRoom) {
        setName(dataRoom.name)
        setCode(roomCode)
        setTaskToVote(dataRoom.taskToVote)
        setUsersRoom([])
        
        const faribaseUsersRoom:FaribaseUsersRoom = dataRoom.users
        Object.entries(faribaseUsersRoom).map(([key, value]) => {

          setUsersRoom((usersRoom:UserRoom[]) => {
            return [
              value,
              ...usersRoom,
            ]
          })
          
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


  const createTask = (title: string) => {
    database.ref(`rooms/${roomCode}/tasks`).push({
      title: title,
    })
  }

  const deleteTask = (taskId: string) => {
    database.ref(`rooms/${roomCode}/tasks/${taskId}`).remove()
  }

  const handleTaskToVote = (task:Task) => {
    task.votes = 0
    
    database.ref(`rooms/${roomCode}`).child('taskToVote').set(task ?? {})
    
  }

  const handleVote = (value:number, taskId: string) => {
    if (!user) return
    
    const taskVotesRef = database.ref(`rooms/${roomCode}/tasks/${taskId}/votes`)
    taskVotesRef.child(user.id).set({
      value: value,
    })
  }

  return (
    <RoomContext.Provider value={{name, code, usersRoom, tasks, taskToVote, createTask, deleteTask, handleVote, handleTaskToVote}}>
      {children}
    </RoomContext.Provider>
  )
}