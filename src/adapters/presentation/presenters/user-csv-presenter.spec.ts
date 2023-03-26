import { test, expect } from 'vitest'
import { faker } from '@faker-js/faker'

import { UserCSVPresenter } from './user-csv-presenter'

const USER_DEFAULT_DATA = Array.from({ length: 10 }, () => ({
  name: faker.name.fullName(),
  email: faker.internet.email()
}))

const userCSVPresenter = new UserCSVPresenter()

test('should create valid users csv', () => {
  const csv = userCSVPresenter.present(USER_DEFAULT_DATA)

  expect(csv)
    .toBeTruthy()
})
