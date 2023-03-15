import { type UserData } from '@/entities/user-data'
import { type RegisterUserResponse } from '../register-user'

export interface RegisterUser {
  registerUserOnMailingList: (data: UserData) => Promise<RegisterUserResponse>
}
