import faker from '@faker-js/faker'
import * as firebaseDatabase from "firebase/database";

export const mockHttpResponse = (): any => ({
  key: faker.random.alphaNumeric(10)
})

export class MockFirebaseDatabase {
  private mockedFirebaseDatabase = firebaseDatabase as jest.Mocked<typeof firebaseDatabase>

  constructor () {}

  public mockPush(expectedResponse:any = mockHttpResponse) {
    this.mockedFirebaseDatabase.push.mockClear().mockResolvedValue(expectedResponse)
    return this.mockedFirebaseDatabase
  }
}