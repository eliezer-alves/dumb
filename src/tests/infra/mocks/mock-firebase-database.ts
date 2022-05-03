import faker from '@faker-js/faker'
import * as firebaseDatabase from "firebase/database";

export const mockHttpResponse = (): any => ({
  key: faker.random.alphaNumeric(10)
})

export enum FirebaseErrorCode {
  PERMISSION_DENIED = 'PERMISSION_DENIED'
}

export class FirebaseError extends Error {
  public code: string
  constructor (code:string = '', message: string = 'Firebase Error') {
    super(message)
    this.name = 'FirebaseError'
    this.code = code
  }
}

export class MockFirebaseDatabase {
  private mockedFirebaseDatabase = firebaseDatabase as jest.Mocked<typeof firebaseDatabase>
  private isError:boolean = false
  private errorCode?:FirebaseErrorCode
  private errorMessage?:string = 'Mocked Firebase Error'

  constructor () {}

  public mockPush(expectedResponse:any = mockHttpResponse) {
    console.log(this.isError)
    if (this.isError) {
      this.mockedFirebaseDatabase.push.mockClear().mockImplementation(() => {
        throw new FirebaseError(this.errorCode, this.errorMessage)
      })
      console.log('here')
      
    } else {
      this.mockedFirebaseDatabase.push.mockClear().mockResolvedValue(expectedResponse)
    }

    return this.mockedFirebaseDatabase
  }

  public throwError(code:FirebaseErrorCode, message?: string):void {
    this.isError = true
    this.errorCode = code
    this.errorMessage = message    
  }
}