

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

export type HttpResponse<T = any> = {
  status: HttpStatusCode
  body?: T
}

export interface HttpClient<T = any> {
  request(params: HttpRequest): Promise<HttpResponse<T>>
}