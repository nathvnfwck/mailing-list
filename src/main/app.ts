import express from 'express'

import { bodyParser } from './middleware/body-parser'
import { contentType } from './middleware/content-type'
import { cors } from './middleware/cors'

import { router } from './routes'

const app = express()

app.use(bodyParser)
app.use(contentType)
app.use(cors)

app.use(router)

export { app }
