import { InMemoryUserRepository } from '@/adapters/repositories/in-memory-user-repository'
import { type UserData } from '@/entities/user-data'
import { test, describe, expect } from 'vitest'

import { RegisterUser } from './register-user'

import { InvalidEmailError } from '@/entities/errors/invalid-email'
import { InvalidNameError } from '@/entities/errors/invalid-name'

function makeSut () {
  const inMemoryRepository = new InMemoryUserRepository()
  const registerUser = new RegisterUser(inMemoryRepository)

  return {
    inMemoryRepository,
    registerUser
  }
}

describe('register user on mailing list usecase', () => {
  test('should register new user with valid data', async () => {
    const userData: UserData = {
      email: 'contact@nathaan.tech',
      name: 'Nathan Scout'
    }

    const { inMemoryRepository, registerUser } = makeSut()
    const response = await registerUser.registerUserOnMailingList(userData)

    expect(response.isRight()).toBeTruthy()
    expect(response.value).toMatchObject(userData)
    expect(await inMemoryRepository.exists(userData.email)).toBeTruthy()
  })

  test('should not register new user with empty name', async () => {
    const userData: UserData = {
      email: 'contact@nathaan.tech',
      name: ''
    }

    const { inMemoryRepository, registerUser } = makeSut()
    const response = await registerUser.registerUserOnMailingList(userData)

    expect(response.isLeft()).toBeTruthy()
    expect(response.value).toBeInstanceOf(InvalidNameError)
    expect(await inMemoryRepository.exists(userData.email)).toBeFalsy()
  })

  test('should not register new user with invalid name', async () => {
    const userData: UserData = {
      email: 'contact@nathaan.tech',
      name: 'na'
    }

    const { inMemoryRepository, registerUser } = makeSut()
    const response = await registerUser.registerUserOnMailingList(userData)

    expect(response.isLeft()).toBeTruthy()
    expect(response.value).toBeInstanceOf(InvalidNameError)
    expect(await inMemoryRepository.exists(userData.email)).toBeFalsy()
  })

  test('should register new user with empty email', async () => {
    const userData: UserData = {
      email: '',
      name: 'Nathan Scout'
    }

    const { inMemoryRepository, registerUser } = makeSut()
    const response = await registerUser.registerUserOnMailingList(userData)

    expect(response.isLeft()).toBeTruthy()
    expect(response.value).toBeInstanceOf(InvalidEmailError)
    expect(await inMemoryRepository.exists(userData.email)).toBeFalsy()
  })

  test('should register new user with invalid email', async () => {
    const userData: UserData = {
      email: 'nath',
      name: 'Nathan Scout'
    }

    const { inMemoryRepository, registerUser } = makeSut()
    const response = await registerUser.registerUserOnMailingList(userData)

    expect(response.isLeft()).toBeTruthy()
    expect(response.value).toBeInstanceOf(InvalidEmailError)
    expect(await inMemoryRepository.exists(userData.email)).toBeFalsy()
  })
})
