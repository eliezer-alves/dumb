import { CreateRoomParams } from "@/domain/usecases/create-room";
import { AccessDeniedError } from "@/tests/domain/errors/access-denied-error";
import { HttpClient, HttpMethod, HttpStatusCode } from "../protocols/http";

export class RemoteCreateRoom {
  private method:HttpMethod = 'post'

  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async make(params: CreateRoomParams): Promise<any> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: this.method,
      body: params
    })

    switch (httpResponse.status) {
      case HttpStatusCode.ok:
        return httpResponse.body
      
        case HttpStatusCode.unauthorized:
          throw new AccessDeniedError()            
    
      default:
        throw new Error()
    }
  }
}