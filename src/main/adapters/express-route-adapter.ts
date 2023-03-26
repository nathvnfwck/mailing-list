import { PassThrough } from 'node:stream'

import { type Request, type Response } from 'express'

import { type Controller } from '@/adapters/presentation/controllers/ports/controller'
import { type HttpRequest } from '@/adapters/presentation/controllers/ports/http'

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: {
        ...request.body,
        ...request.query
      }
    }

    const httpResponse = await controller.handle(httpRequest)

    response.status(httpResponse.statusCode)

    if (httpResponse.file) {
      response.set('Content-disposition', 'attachment; filename=users.csv')
      response.set('Content-type', 'text/plain')

      const readStream = new PassThrough()
      readStream.end(httpResponse.file)

      return readStream
        .pipe(response)
    }
    if (httpRequest.body) response.json(httpResponse.body)
  }
}
