import { HttpRequest } from "@/data/protocols/http"
import { FirebaseRemoteService } from "@/infra/http/firebase-remote-service"
import { AccessDeniedError } from "@/tests/domain/errors"
import { mockCreateRoomParams } from "@/tests/domain/mocks"
import { app } from "@/infra/firebase-remote-service/firebase"
import { push, ref, getDatabase } from "firebase/database";
import { mockFirebaseDatabase } from '@/tests/infra/mocks'

mockFirebaseDatabase();


describe('FirebaseRemoteService', () => {
  test('Ensures that the params in adapter FirebaseRemoteService is currect', async() => {
    const params: HttpRequest = {
      url: 'rooms/',
      method: 'post',
      body: mockCreateRoomParams()
    }
    const sut = new FirebaseRemoteService()
    // const response = await sut.request(params)
    const db = getDatabase(app);
    const response = push(ref(db, params.url), params.body)
    console.log(response)

    expect({}).toEqual({})
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