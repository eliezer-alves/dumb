import { HttpRequest } from "@/data/protocols/http"
import { FirebaseRemoteService } from "@/infra/http/firebase-remote-service"
import { AccessDeniedError } from "@/tests/domain/errors"
import { mockCreateRoomParams } from "@/tests/domain/mocks"
import { mockFirebaseDatabase } from '@/tests/infra/mocks/mock-firebase-database'

jest.mock('firebase/app');
jest.mock('firebase/database');


describe('FirebaseRemoteService', () => {
  test('Ensures that the params in adapter FirebaseRemoteService is currect', async() => {
    const params: HttpRequest = {
      url: 'rooms/',
      method: 'post',
      body: mockCreateRoomParams()
    }

    const mockedFirebaseDatabase = mockFirebaseDatabase()

    const sut = new FirebaseRemoteService()
    await sut.request(params)

    expect(mockedFirebaseDatabase.push).toHaveBeenCalledWith(undefined, params.body)
  })

  // test('Should throw UnauthorizedError if adapter FirebaseRemoteService returns PERMISSION_DENIED', async() => {

  //   const request: HttpRequest = {
  //     url: 'rooms/',
  //     method: 'post',
  //     body: mockCreateRoomParams()
  //   }

  //   const sut = new FirebaseRemoteService()
  //   const promise = sut.request(request)
    
  //   await expect(promise).rejects.toThrow(new AccessDeniedError())
  // })
})