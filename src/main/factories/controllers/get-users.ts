import { GetUsersController } from '@/adapters/presentation/controllers/get-users-controller'
import { type Controller } from '@/adapters/presentation/controllers/ports/controller'
import { UserCSVPresenter } from '@/adapters/presentation/presenters/user-csv-presenter'
import { ListAllUsers } from '@/usecases/list-all-users/list-all-users'
import { type UserRepository } from '@/usecases/ports/user-repository'

export const makeFindAllUsersController = (userRepository: UserRepository): Controller => {
  const listAllUsers = new ListAllUsers(userRepository)
  const csvPresenter = new UserCSVPresenter()

  const getUsersController = new GetUsersController(
    listAllUsers,
    csvPresenter
  )

  return getUsersController
}
