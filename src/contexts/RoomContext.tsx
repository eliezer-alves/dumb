import { createContext, ReactNode, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { database } from '../services/firebase'

type UserRoom = {
	id: string
	name: string
	avatar: string
}

type FirebaseUsersRoom = Record<string, UserRoom>

// type FirebaseUsersRoom = Record<string, {name: string}>
type Vote = {
  value: number
}

type FirebaseTaskVotes = Record<string, Vote>

type Task = {
  id: string
  title: string
  votes: any
  numberOfVotes: number|undefined
  sumOfVotes: number|undefined
  average: number|undefined
}

type FirebaseTask = {
  id: string
  title: string
  votes: FirebaseTaskVotes|undefined
  numberOfVotes: number|undefined
  sumOfVotes: number|undefined
  average: number|undefined
}


type FirebaseTasks = Record<string, FirebaseTask>


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
  handleVotingIntention(value: number): void
  handleCloseVote(): void
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
        setTaskToVote(handleFirebaseTaskVote(dataRoom.taskToVote))        
        setUsersRoom([])        
        
        const firebaseUsersRoom:FirebaseUsersRoom = dataRoom.users
        Object.entries(firebaseUsersRoom).map(([key, value]) => {

          setUsersRoom((usersRoom:UserRoom[]) => {
            return [
              value,
              ...usersRoom,
            ]
          })
          
        })

        const firebaseTasks: FirebaseTasks = dataRoom.tasks ?? {}
        const parsedTasks = Object.entries(firebaseTasks).map((task) => {
          return handleFirebaseTask(task)
        })        
        setTasks(parsedTasks)

      }
    })    
  
    return () => {}
  }, [roomCode, user?.id])

  function handleFirebaseTaskVote (task: FirebaseTask | undefined): Task|undefined {
    if (!task) {
      return undefined;
    }

    var sumOfVotes = 0
    var numberOfVotes = 0
    var average = 0

    if (task.votes){
      const firebaseTaskVotes: FirebaseTaskVotes = task.votes ?? {}
      const parsedVotes = Object.entries(firebaseTaskVotes).map(([key, value]) => {
        sumOfVotes += value.value            
      })

      numberOfVotes = parsedVotes.length
      average = Math.round(sumOfVotes/numberOfVotes)
    }
    
    return {
      id: task.id,
      title: task.title,
      votes: task.votes,
      numberOfVotes: numberOfVotes,
      sumOfVotes: sumOfVotes,
      average: average,
    }
  }

  function handleFirebaseTask (task: [string, FirebaseTask]): Task {    
    const [key, value] = task
    
    return {
      id: key,
      title: value.title,
      votes: undefined,
      numberOfVotes: value.numberOfVotes,
      sumOfVotes: value.sumOfVotes,
      average: value.average,
    }
  }

  const createTask = (title: string) => {
    database.ref(`rooms/${roomCode}/tasks`).push({
      title: title,
    })
  }

  const deleteTask = (taskId: string) => {
    database.ref(`rooms/${roomCode}/tasks/${taskId}`).remove()
  }

  const handleTaskToVote = (task:Task|undefined) => {
    if (!task) {
      database.ref(`rooms/${roomCode}/taskToVote`).remove()
      return
    }
    
    task.votes = 0
    
    database.ref(`rooms/${roomCode}`).child('taskToVote').set(task ?? {})
    
  }

  const handleVotingIntention = (value:number) => {
    if (!user || !taskToVote) return
    
    const taskVotesRef = database.ref(`rooms/${roomCode}/taskToVote/votes`)
    taskVotesRef.child(user.id).set({
      value: value,
    })
  }

  const handleCloseVote = () => {
    if (!taskToVote) return
    const taskRef = database.ref(`rooms/${roomCode}/tasks/${taskToVote.id}`)
    taskRef.set(taskToVote)
    database.ref(`rooms/${roomCode}/taskToVote`).remove()
  }

  return (
    <RoomContext.Provider value={{name, code, usersRoom, tasks, taskToVote, createTask, deleteTask, handleVotingIntention, handleTaskToVote, handleCloseVote}}>
      {children}
    </RoomContext.Provider>
  )
}