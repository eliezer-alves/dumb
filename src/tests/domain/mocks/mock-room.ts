import { CreateRoomParams } from "@/domain/usecases/create-room";
import faker from "@faker-js/faker";

export const mockCreateRoomParams = ():CreateRoomParams => ({
  name: faker.fake.name
})