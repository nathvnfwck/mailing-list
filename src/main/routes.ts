import { Router } from 'express'

import { adaptRoute } from './adapters/express-route-adapter'
import { makeFindAllUsersController } from './factories/controllers/get-users'
import { makeRegisterUserController } from './factories/controllers/register-user'
import { makeUserRepository } from './factories/repositories/user-repository'

const router = Router()

const userRepository = makeUserRepository()

router.get('/users', adaptRoute(makeFindAllUsersController(userRepository)))
router.post('/users', adaptRoute(makeRegisterUserController(userRepository)))

export { router }
