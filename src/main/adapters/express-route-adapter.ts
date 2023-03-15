import { type Request, type Response } from 'express'

import { type Controller } from '@/adapters/presentation/controllers/ports/controller'
import { type HttpRequest } from '@/adapters/presentation/controllers/ports/http'

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body
    }

    const httpResponse = await controller.handle(httpRequest)

    response.status(httpResponse.statusCode)

    if (httpRequest.body) response.json(httpResponse.body)
  }
}
