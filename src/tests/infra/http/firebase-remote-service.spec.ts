import { HttpRequest } from "@/data/protocols/http"
import { FirebaseRemoteService } from "@/infra/http/firebase-remote-service"
import { AccessDeniedError } from "@/tests/domain/errors"
import { mockCreateRoomParams } from "@/tests/domain/mocks"
import { MockFirebaseDatabase } from '@/tests/infra/mocks/mock-firebase-database'

jest.mock('firebase/app');
jest.mock('firebase/database');

const requestCreateRoom: HttpRequest = {
  url: 'rooms/',
  method: 'post',
  body: mockCreateRoomParams()
}

type SutTypes = {
  sut: FirebaseRemoteService,
  mockFirebaseDatabase: MockFirebaseDatabase
}

const makeSut = (): SutTypes => {
  const sut = new FirebaseRemoteService()
  const mockFirebaseDatabase = new MockFirebaseDatabase()

  return {
    sut,
    mockFirebaseDatabase
  }
}


describe('FirebaseRemoteService', () => {
  test('Ensures that the params in adapter FirebaseRemoteService is currect', async() => {
    
    const { sut,  mockFirebaseDatabase} = makeSut()
    const mockedPush = mockFirebaseDatabase.mockPush()
    await sut.request(requestCreateRoom)

    expect(mockedPush.push).toHaveBeenCalledWith(undefined, requestCreateRoom.body)
  })

  test('Should throw UnauthorizedError if adapter FirebaseRemoteService returns PERMISSION_DENIED', async() => {

    const { sut } = makeSut()
    const promise = sut.request(requestCreateRoom)
    
    await expect(promise).rejects.toThrow(new AccessDeniedError())
  })
})