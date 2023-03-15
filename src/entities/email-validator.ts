const MAX_EMAIL_LENGTH = 255
const MIN_EMAIL_LENGTH = 11
const MAX_USERNAME_LENGTH = 63
const EMAIL_VALIDATOR_REGEX = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

export function validateEmail (value: string): boolean {
  const trimmedValue = value.trim()

  const isLengthValid =
    trimmedValue.length >= MIN_EMAIL_LENGTH && trimmedValue.length <= MAX_EMAIL_LENGTH
  const isUsernameLengthValid = trimmedValue.split('@')[0].length <= MAX_USERNAME_LENGTH
  const isEmailValid = EMAIL_VALIDATOR_REGEX.test(trimmedValue)

  return isLengthValid && isUsernameLengthValid && isEmailValid
}
