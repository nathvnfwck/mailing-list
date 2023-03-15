import { type UserData } from '@/entities/user-data'

export interface ListUsers {
  findAllUsers: () => Promise<UserData[]>
}
