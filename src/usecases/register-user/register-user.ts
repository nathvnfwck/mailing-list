import { type InvalidEmailError } from '@/entities/errors/invalid-email'
import { type InvalidNameError } from '@/entities/errors/invalid-name'
import { type UserData } from '@/entities/user-data'
import { type UserRepository } from '../ports/user-repository'

import { User } from '@/entities/user'
import { type Either, left, right } from '@/shared/either'

export type RegisterUserResponse = Either<InvalidNameError | InvalidEmailError, UserData>

export class RegisterUser {
  constructor (
    private readonly userRepository: UserRepository
  ) {}

  async registerUserOnMailingList (data: UserData): Promise<RegisterUserResponse> {
    const userOrError = User.create(data)
    if (userOrError.isLeft()) return left(userOrError.value)

    const user = userOrError.value
    const alreadyExists = await this.userRepository.exists(user.email)

    if (!alreadyExists) {
      await this.userRepository.create(data)
    }

    return right(data)
  }
}
