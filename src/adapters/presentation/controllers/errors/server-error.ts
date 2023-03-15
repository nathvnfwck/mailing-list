export class ServerError extends Error {
  public readonly name: string = 'ServerError'

  constructor (reason: string) {
    super(`Server error: ${reason}.`)
  }
}
