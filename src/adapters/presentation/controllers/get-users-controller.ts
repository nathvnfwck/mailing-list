import { type HttpRequest } from './ports/http'

import { ok, notFound, sendFile, serverError } from './helpers/http-response'

import { type Controller } from './ports/controller'
import { type ListAllUsers } from '@/usecases/list-all-users/list-all-users'
import { type Presenter } from '../presenters/ports/presenter'
import { type UserData } from '@/entities/user-data'

interface GetUsersRequest {
  format?: 'json' | 'csv'
}

export class GetUsersController implements Controller {
  constructor (
    private readonly listAllUsers: ListAllUsers,
    private readonly presenter: Presenter<UserData[], Buffer>
  ) {}

  async handle (httpRequest: HttpRequest<GetUsersRequest>) {
    try {
      const format = httpRequest.body?.format ?? 'json'

      const users = await this.listAllUsers.findAllUsers()
      if (users.length === 0) return notFound()

      if (format === 'csv') {
        const response = this.presenter.present(users)
        return sendFile(response)
      }

      return ok(users)
    } catch (err) {
      return serverError('internal')
    }
  }
}
