export interface HttpResponse <B = any> {
  statusCode: number
  body: B
  file?: Buffer
}

export interface HttpRequest <B = any> {
  body?: B
}
