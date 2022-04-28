import { HttpClient, HttpRequest, HttpResponse, HttpStatusCode } from '@/data/protocols/http'

export class HttpClientSpy implements HttpClient {
  url?: string
  method?: string
  body?: any
  response: HttpResponse = {
    status: HttpStatusCode.ok
  }

  request(params: HttpRequest): Promise<HttpResponse> {
    this.url = params.url
    this.method = params.method
    this.body = params.body
    return Promise.resolve(this.response)
  }
}