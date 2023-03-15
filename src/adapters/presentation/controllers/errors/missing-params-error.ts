export class MissingParamsError extends Error {
  public readonly name: string = 'MissingParamsError'

  constructor (parameterName: string) {
    super(`Missing param: ${parameterName}`)
  }
}
