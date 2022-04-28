import { HtppClientSpy } from '@/tests/data/mocks'
import { RemoteCreateRoom } from '@/data/usecases/remote-create-room'
import { mockCreateRoomParams } from '@/tests/domain/mocks'
import faker from '@faker-js/faker'

describe('RemoteCreateRoom', () => {
  test('Ensures that the request of HttpClient in RemoteCreateRoom are correct', () => {
    const url = faker.internet.url()
    const httpClientSpy = new HtppClientSpy()
    const newRoomParams = mockCreateRoomParams()
    const sut = new RemoteCreateRoom(url, httpClientSpy)
    sut.make(newRoomParams)

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toBe(newRoomParams)
  })
})