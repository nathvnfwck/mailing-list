export interface HttpResponse <B = any> {
  statusCode: number
  body: B
}

export interface HttpRequest <B = any> {
  body?: B
}
