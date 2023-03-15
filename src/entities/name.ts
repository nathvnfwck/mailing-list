import { type Either, left, right } from '../shared/either'
import { InvalidNameError } from './errors/invalid-name'

export class Name {
  public readonly value: string

  private constructor (value: string) {
    this.value = value
    Object.freeze(this)
  }

  private static validate (value: string): boolean {
    return !!value && value.trim().length >= 3
  }

  public static create (name: string): Either<InvalidNameError, Name> {
    const isValidName = Name.validate(name)
    if (!isValidName) return left(new InvalidNameError(name))

    return right(new Name(name))
  }
}
