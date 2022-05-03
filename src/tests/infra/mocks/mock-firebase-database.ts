import faker from '@faker-js/faker'
import * as firebaseDatabase from "firebase/database";

export const mockHttpResponse = (): any => ({
  key: faker.random.alphaNumeric(10)
})

export const mockFirebaseDatabase = (expectedResponse: any = mockHttpResponse): jest.Mocked<typeof firebaseDatabase> => {
  const mockedFirebaseDatabase = firebaseDatabase as jest.Mocked<typeof firebaseDatabase>
  mockedFirebaseDatabase.push.mockClear().mockResolvedValue(expectedResponse)
  
  return mockedFirebaseDatabase
}
