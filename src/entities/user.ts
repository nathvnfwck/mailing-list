import { Name } from './name'
import { Email } from './email'
import { type UserData } from './user-data'

import { type InvalidNameError } from './errors/invalid-name'
import { type InvalidEmailError } from './errors/invalid-email'

import { type Either, left, right } from '../shared/either'

export class User {
  private readonly _name: Name
  private readonly _email: Email

  get name () {
    return this._name.value
  }

  get email () {
    return this._email.value
  }

  private constructor (name: Name, email: Email) {
    this._name = name
    this._email = email
  }

  public static create (data: UserData): Either<InvalidNameError | InvalidEmailError, User> {
    const nameOrError = Name.create(data.name)
    if (nameOrError.isLeft()) return left(nameOrError.value)

    const emailOrError = Email.create(data.email)
    if (emailOrError.isLeft()) return left(emailOrError.value)

    const user = new User(
      nameOrError.value,
      emailOrError.value
    )

    return right(user)
  }
}
