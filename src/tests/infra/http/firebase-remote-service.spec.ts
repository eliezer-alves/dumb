import { HttpRequest } from "@/data/protocols/http"
import { FirebaseRemoteService } from "@/infra/http/firebase-remote-service"
import { AccessDeniedError } from "@/tests/domain/errors"
import { mockCreateRoomParams } from "@/tests/domain/mocks"
import { MockFirebaseDatabase, FirebaseErrorCode } from '@/tests/infra/mocks/mock-firebase-database'

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
  test('Should call firebase with correct values', async() => {    
    const { sut,  mockFirebaseDatabase} = makeSut()
    const mockedPush = mockFirebaseDatabase.mockPush()
    await sut.request(requestCreateRoom)

    expect(mockedPush.push).toHaveBeenCalledWith(undefined, requestCreateRoom.body)
  })

  test('Should throw UnauthorizedError if firebase returns PERMISSION_DENIED', async() => {
    const { sut, mockFirebaseDatabase } = makeSut()
    mockFirebaseDatabase.throwError(FirebaseErrorCode.PERMISSION_DENIED)
    mockFirebaseDatabase.mockPush()

    const promise = sut.request(requestCreateRoom)    
    
    await expect(promise).rejects.toThrow(new AccessDeniedError())
  })
})