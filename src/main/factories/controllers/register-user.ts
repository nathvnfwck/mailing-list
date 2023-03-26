import { type Controller } from '@/adapters/presentation/controllers/ports/controller'
import { RegisterUserController } from '@/adapters/presentation/controllers/register-user-controller'
import { type UserRepository } from '@/usecases/ports/user-repository'
import { RegisterUser } from '@/usecases/register-user/register-user'

export const makeRegisterUserController = (userRepository: UserRepository): Controller => {
  const registerUser = new RegisterUser(userRepository)
  const registerUserController = new RegisterUserController(registerUser)

  return registerUserController
}
