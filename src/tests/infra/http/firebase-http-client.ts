import { HttpRequest } from "@/data/protocols/http"
import { FirebaseHttpClient } from "@/infra/http/firebase-http-client"
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
  sut: FirebaseHttpClient,
  mockFirebaseDatabase: MockFirebaseDatabase
}

const makeSut = (): SutTypes => {
  const sut = new FirebaseHttpClient()
  const mockFirebaseDatabase = new MockFirebaseDatabase()

  return {
    sut,
    mockFirebaseDatabase
  }
}

describe('FirebaseHttpClient', () => {
  test('Should call firebase with correct values', async() => {    
    const { sut,  mockFirebaseDatabase} = makeSut()
    const mockedPush = mockFirebaseDatabase.mockPush()

    await sut.request(requestCreateRoom)

    expect(mockedPush.push).toHaveBeenCalledWith(undefined, requestCreateRoom.body)
  })

  test('Should return correct response', async() => {
    const { sut, mockFirebaseDatabase } = makeSut()
    mockFirebaseDatabase.mockPush(requestCreateRoom.body)

    const response = await sut.request(requestCreateRoom)
    
    expect(requestCreateRoom.body).toEqual(response)
  })

  test('Should throw UnauthorizedError if firebase returns PERMISSION_DENIED', async() => {
    const { sut, mockFirebaseDatabase } = makeSut()
    mockFirebaseDatabase.throwError(FirebaseErrorCode.PERMISSION_DENIED)
    mockFirebaseDatabase.mockPush()

    const promise = sut.request(requestCreateRoom)    
    
    await expect(promise).rejects.toThrow(new AccessDeniedError())
  })
})