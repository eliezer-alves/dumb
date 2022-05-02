import faker from '@faker-js/faker'

const push = jest.fn((ref: any, data: object) => {
  const response = {
    id: faker.random.alphaNumeric(),
    ...data
  }
  return Promise.resolve(response)
})

export const mockFirebaseDatabase = () => {
  jest.mock('firebase/database', () => {
    return {
      push: push,
      getDatabase: (app: any) => {
        return {}
      },
      ref: (db: any, reference:string) => ({})
    }
  })
}