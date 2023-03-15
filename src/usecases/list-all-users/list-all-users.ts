import { type UserData } from '@/entities/user-data'
import { type UserRepository } from '../ports/user-repository'
import { type ListUsers } from './ports/list-users'

export class ListAllUsers implements ListUsers {
  constructor (
    private readonly userRepository: UserRepository
  ) {}

  async findAllUsers (): Promise<UserData[]> {
    const users = await this.userRepository.findAll()

    return users
  }
}
