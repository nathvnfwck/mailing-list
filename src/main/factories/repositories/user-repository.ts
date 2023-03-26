import { InMemoryUserRepository } from '@/adapters/repositories/in-memory-user-repository'
import { type UserRepository } from '@/usecases/ports/user-repository'

export const makeUserRepository = (): UserRepository => {
  const userRepository = new InMemoryUserRepository()

  return userRepository
}
