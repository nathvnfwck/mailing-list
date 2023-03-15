import { test, expect } from 'vitest'
import { faker } from '@faker-js/faker'

import { InMemoryUserRepository } from '@/adapters/repositories/in-memory-user-repository'
import { ListAllUsers } from './list-all-users'

const USER_DEFAULT_DATA = Array.from({ length: 10 }, () => ({
  name: faker.name.fullName(),
  email: faker.internet.email()
}))

function makeSut () {
  const inMemoryRepository = new InMemoryUserRepository(USER_DEFAULT_DATA)
  const listAllUsers = new ListAllUsers(inMemoryRepository)

  return {
    inMemoryRepository,
    listAllUsers
  }
}

test('list all users use case', async () => {
  const { inMemoryRepository, listAllUsers } = makeSut()

  const inMemoryFindAll = await inMemoryRepository.findAll()
  const response = await listAllUsers.findAllUsers()

  expect(response)
    .toMatchObject(inMemoryFindAll)

  expect(response.length)
    .toBe(inMemoryFindAll.length)
})
