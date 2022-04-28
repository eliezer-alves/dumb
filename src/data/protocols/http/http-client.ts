

export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export type HttpRequest = {
  url: string
  body?: object
  method: HttpMethod
}

export type HttpResponse = {
  status: HttpStatusCode
  body?: any
}

export interface HttpClient {
  request(params: HttpRequest): Promise<HttpResponse>
}