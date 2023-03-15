import { describe, test, expect } from 'vitest'

import { validateEmail } from './email-validator'

describe('Email validator', () => {
  test('Should accept valid email (valid classes)', () => {
    expect(validateEmail('nathaanscout@gmail.com')).toBeTruthy()
  })

  test('Should not accept email without the at-sign (2)', () => {
    expect(validateEmail('nathanscoutgmail.com')).toBeFalsy()
  })

  test('Should not accept more than 64 chars on local part (4)', () => {
    const localPart = 'c'.repeat(100)
    const email = localPart + '@gmail.com'
    expect(validateEmail(email)).toBeFalsy()
  })

  test('Should not accept empty local part (5)', () => {
    expect(validateEmail('@gmail.com')).toBeFalsy()
  })

  test('Should not accept invalid char - local part (7)', () => {
    expect(validateEmail('na thanscout@gmail.com')).toBeFalsy()
  })

  test('Should not accept a dot as first char - local part (9)', () => {
    expect(validateEmail('.nathanscout@gmail.com')).toBeFalsy()
  })

  test('Should not accept a dot as last char - local part (11)', () => {
    expect(validateEmail('nathanscout.@gmail.com')).toBeFalsy()
  })

  test('Should not accept more than 255 chars on domain part (4)', () => {
    const domain = 'c'.repeat(260)
    const email = 'nathanscout@' + domain + '.com'
    expect(validateEmail(email)).toBeFalsy()
  })

  test('Should not accept dot as first char - domain part', () => {
    expect(validateEmail('nathanscout@.gmail.com')).toBeFalsy()
  })
})
