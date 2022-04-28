export class UnexpectedError extends Error {
  constructor(message: string = 'An unexpected error occurred') {
    super(message)
    this.name = 'UnexpectedError'
  }
}