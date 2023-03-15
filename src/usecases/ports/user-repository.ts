import { type UserData } from '@/entities/user-data'

export interface UserRepository {
  create: (data: UserData) => Promise<void>
  exists: (email: string) => Promise<boolean>
  findAll: () => Promise<UserData[]>
}
