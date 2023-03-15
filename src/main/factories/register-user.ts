import { type Controller } from '@/adapters/presentation/controllers/ports/controller'
import { RegisterUserController } from '@/adapters/presentation/controllers/register-user-controller'
import { InMemoryUserRepository } from '@/adapters/repositories/in-memory-user-repository'
import { RegisterUser } from '@/usecases/register-user/register-user'

export const makeRegisterUserController = (): Controller => {
  const userRepository = new InMemoryUserRepository()
  const registerUser = new RegisterUser(userRepository)
  const registerUserController = new RegisterUserController(registerUser)

  return registerUserController
}
