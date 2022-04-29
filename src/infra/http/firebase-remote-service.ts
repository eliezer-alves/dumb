import { HttpRequest, HttpResponse, HttpStatusCode } from "@/data/protocols/http";
import { getDatabase, ref, push } from "firebase/database";
import { app } from "@/infra/firebase/firebase"

export class FirebaseRemoteService {
  private db
  private defaultResponse: HttpResponse = {
    status: HttpStatusCode.badRequest,
  }

  constructor() {
    this.db = getDatabase(app)
  }


  async request(params: HttpRequest): Promise<any> {
    var response
    switch (params.method) {
      case 'post':
        response = await push(ref(this.db, params.url), params.body)
        break
      default:
        response = this.defaultResponse
        break
    }    

    return Promise.resolve(response)
  }
}