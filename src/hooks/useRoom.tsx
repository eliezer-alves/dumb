import { useEffect, useState } from "react"
import { database } from '../services/firebase'
import { useAuth } from "./useAuth"

type User = {
	id: string;
	name: string;
	avatar: string;
}

export function useRoom(roomCode: string) {
  const { user } = useAuth()
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [usersRoom, setUsersRoom] = useState<User[]>([])

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
        });
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
      });
    })    
  }

  function createTask(title: string) {
    database.ref(`rooms/${roomCode}/tasks`).push({
      title: title,
    })
  }
  

  return {name, code, usersRoom, createTask}
}