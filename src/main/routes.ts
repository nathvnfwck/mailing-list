import { Router } from 'express'

import { adaptRoute } from './adapters/express-route-adapter'
import { makeRegisterUserController } from './factories/register-user'

const router = Router()

router.post('/users', adaptRoute(makeRegisterUserController()))

export { router }
