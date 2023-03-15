import { type RegisterUser } from '@/usecases/register-user/ports/register-user'
import { type HttpRequest } from './ports/http'

import { badRequest, created, serverError } from './helpers/http-response'
import { MissingParamsError } from './errors/missing-params-error'
import { type RegisterUserResponse } from '@/usecases/register-user/register-user'
import { type Controller } from './ports/controller'

interface RegisterUserRequest {
  name: string
  email: string
}

export class RegisterUserController implements Controller {
  constructor (
    private readonly registerUser: RegisterUser
  ) {}

  async handle (httpRequest: HttpRequest<RegisterUserRequest>) {
    try {
      if (!httpRequest.body?.email) {
        return badRequest(new MissingParamsError('email'))
      }
      if (!httpRequest.body.name) {
        return badRequest(new MissingParamsError('name'))
      }

      const userData = { name: httpRequest.body.name, email: httpRequest.body.email }
      const registerUserResponse: RegisterUserResponse = await this.registerUser.registerUserOnMailingList(userData)

      if (registerUserResponse.isLeft()) {
        return badRequest(registerUserResponse.value)
      }

      return created()
    } catch (err) {
      return serverError('internal')
    }
  }
}
