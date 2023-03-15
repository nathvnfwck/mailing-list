import { type Either, left, right } from '../shared/either'
import { validateEmail } from './email-validator'
import { InvalidEmailError } from './errors/invalid-email'

export class Email {
  public readonly value: string

  private constructor (value: string) {
    this.value = value
    Object.freeze(this)
  }

  private static validate (value: string): boolean {
    return validateEmail(value)
  }

  public static create (email: string): Either<InvalidEmailError, Email> {
    const isValidEmail = Email.validate(email)
    if (!isValidEmail) return left(new InvalidEmailError(email))

    return right(new Email(email))
  }
}
