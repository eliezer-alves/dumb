import { CreateRoomParams } from "@/domain/usecases/create-room";
import { HttpClient, HttpMethod } from "../protocols/http";

export class RemoteCreateRoom {
  private method:HttpMethod = 'post'

  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  make(params: CreateRoomParams): Promise<any> {
    const response = this.httpClient.request({
      url: this.url,
      method: this.method,
      body: params
    })
    
    return Promise.resolve(response)
  }
}