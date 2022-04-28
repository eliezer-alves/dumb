import { HttpClientSpy } from '@/tests/data/mocks'
import { RemoteCreateRoom } from '@/data/usecases/remote-create-room'
import { mockCreateRoomParams } from '@/tests/domain/mocks'
import faker from '@faker-js/faker'
import { HttpStatusCode } from '@/data/protocols/http'
import { AccessDeniedError } from '@/tests/domain/errors/access-denied-error'

type SutTypes = {
  sut: RemoteCreateRoom
  httpClientSpy: HttpClientSpy
}

const sutFactory = (url = ''): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteCreateRoom(url, httpClientSpy)

  return {
    sut: sut,
    httpClientSpy: httpClientSpy
  }
}

describe('RemoteCreateRoom', () => {
  test('Ensures that the request of HttpClient in RemoteCreateRoom are correct', () => {    
    const url = faker.internet.url()
    const { sut, httpClientSpy } = sutFactory(url)
    const newRoomParams = mockCreateRoomParams()
    sut.make(newRoomParams)

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toBe(newRoomParams)
  })

  test('Should throw Unauthorized if HttpClient returns 403', async() => {
    const { sut, httpClientSpy } = sutFactory()
    httpClientSpy.response = {
      status: HttpStatusCode.unauthorized,
    }

    const promise = sut.make(mockCreateRoomParams())
    await expect(promise).rejects.toThrow(new AccessDeniedError())

  })


})