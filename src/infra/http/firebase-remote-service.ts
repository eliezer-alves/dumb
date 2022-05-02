import { HttpRequest, HttpResponse, HttpStatusCode } from "@/data/protocols/http";
import { getDatabase, ref, push } from "firebase/database";
import { app } from "@/infra/firebase-remote-service/firebase"
import { AccessDeniedError, UnexpectedError } from "@/tests/domain/errors";

export class FirebaseRemoteService {
  private db
  private defaultResponse: HttpResponse = {
    status: HttpStatusCode.badRequest,
  }

  constructor() {
    this.db = getDatabase(app)
  }

  async post (resource: string, data: any) {
    return push(ref(this.db, resource), data)
  }

  async request(params: HttpRequest): Promise<any> {
    var response
    try {
      switch (params.method) {
        case 'post':
          response = await this.post(params.url, params.body)
          break
        default:
          response = this.defaultResponse
          break
      }
    } catch (e: any) {
      if (e.code === 'PERMISSION_DENIED') {
        throw new AccessDeniedError()
      }

      // throw new UnexpectedError()
    }
    
    return Promise.resolve(response)
  }
}