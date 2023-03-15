import { expect, test } from 'vitest'

import { User } from './user'
import { InvalidNameError } from './errors/invalid-name'

test('should create an entity', () => {
  const user = User.create({
    email: 'contact@nathaan.me',
    name: 'Nathan Scout'
  })

  expect(user.isRight())
    .toBeTruthy()

  expect(user.value)
    .toBeInstanceOf(Object)
})

test('should create an entity with invalid fields', () => {
  const user = User.create({
    email: 'asas',
    name: 'a'
  })

  expect(user.isLeft())
    .toBeTruthy()

  user.isLeft() && expect(user.value)
    .toBeInstanceOf(InvalidNameError)
})
