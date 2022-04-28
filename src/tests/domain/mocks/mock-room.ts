import { RoomModel } from "@/domain/models";
import { CreateRoomParams } from "@/domain/usecases/create-room";
import faker from "@faker-js/faker";

export const mockCreateRoomParams = ():CreateRoomParams => ({
  name: faker.fake.name
})

export const mockRoomModel = ():RoomModel => ({
  id: faker.random.alphaNumeric(),
  name: faker.fake.name
})