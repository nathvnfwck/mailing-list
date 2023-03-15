import { type HttpRequest, type HttpResponse } from './http'

export interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
