import { HttpClient, HttpRequest, HttpResponse, HttpStatusCode } from '@/data/protocols/http'
import faker from '@faker-js/faker'

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
  body: faker.helpers.createTransaction()
})

export class HttpClientSpy<T = any> implements HttpClient {
  url?: string
  method?: string
  body?: any
  response: HttpResponse = {
    status: HttpStatusCode.ok
  }

  request(params: HttpRequest): Promise<HttpResponse<T>> {
    this.url = params.url
    this.method = params.method
    this.body = params.body
    return Promise.resolve(this.response)
  }
}