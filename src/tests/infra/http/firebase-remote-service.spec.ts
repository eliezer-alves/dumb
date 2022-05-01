import { HttpRequest } from "@/data/protocols/http"
import { FirebaseRemoteService } from "@/infra/http/firebase-remote-service"
import { AccessDeniedError } from "@/tests/domain/errors"
import { mockCreateRoomParams } from "@/tests/domain/mocks"

describe('FirebaseRemoteService', () => {
  // test('Ensures that the params in adapter FirebaseRemoteService is currect', async() => {
  //   const params: HttpRequest = {
  //     url: 'rooms/',
  //     method: 'post',
  //     body: mockCreateRoomParams()
  //   }
  //   const sut = new FirebaseRemoteService()
  //   const response = await sut.request(params)
  //   console.log(response);
    
  //   // const mock = new MockFirebaseRemoteService()
  //   expect({}).toEqual({})
  // })

  test('Should throw UnauthorizedError if adapter FirebaseRemoteService returns PERMISSION_DENIED', async() => {
    const params: HttpRequest = {
      url: 'rooms/',
      method: 'post',
      body: mockCreateRoomParams()
    }
    const sut = new FirebaseRemoteService()
    const promise = sut.request(params)
    
    // const mock = new MockFirebaseRemoteService()
    await expect(promise).rejects.toThrow(new AccessDeniedError())
  })
})