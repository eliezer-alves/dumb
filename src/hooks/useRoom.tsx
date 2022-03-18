import { useEffect, useState } from "react"
import { database } from '../services/firebase'
import { useAuth } from "./useAuth"

export function useRoom(roomId: string) {
  const { user } = useAuth()
  const [name, setName] = useState('')
  const [code, setCode] = useState('')

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.on('value', room => {
      const dataRoom = room.val()      
      setName(dataRoom.name)
      setCode(room.key ?? '')
    })
    
  
    return () => {}
  }, [roomId, user?.id])
  

  return {name, code}
}