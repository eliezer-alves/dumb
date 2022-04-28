import { RoomModel } from '@/domain/models'

export type CreateRoomParams = {
  name: string
}

export interface CreateRoom{
  make(params: CreateRoomParams): Promise<RoomModel>
}