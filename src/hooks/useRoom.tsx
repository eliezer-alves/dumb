import { useEffect, useState } from "react"
import { database } from '../services/firebase'
import { useAuth } from "./useAuth"

export function useRoom(roomCode: string) {
  const { user } = useAuth()
  const [name, setName] = useState('')
  const [code, setCode] = useState('')

  useEffect(() => {
    if (!user) return

    database.ref(`rooms/${roomCode}/users`).child(user.id).set({})

    const roomRef = database.ref(`rooms/${roomCode}`)    

    roomRef.on('value', room => {
      const dataRoom = room.val()
      console.log(dataRoom);
      
      if (dataRoom) {
        setName(dataRoom.name)
        setCode(roomCode)
      }
    })
    
  
    return () => {}
  }, [roomCode, user?.id])
  

  return {name, code}
}