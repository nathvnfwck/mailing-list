import { type UserData } from '@/entities/user-data'
import { type Presenter } from './ports/presenter'

export type UserPresenterInput = UserData[]
export type UserPresentOutput = Buffer

export class UserCSVPresenter implements Presenter<UserPresenterInput, UserPresentOutput> {
  present (data: UserData[]) {
    const CSV = `
      name, email\n${data.map(user => user.name + ', ' + user.email).join('\n')}
    `.trim()

    const buffer = Buffer.from(CSV)
    return buffer
  }
}
