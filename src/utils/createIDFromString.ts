import { removeAccents } from './removeAccents'
import { replaceWhiteSpaces } from './replaceWhiteSpaces'

export const createIDFromString = (value: string) => {
  return replaceWhiteSpaces(removeAccents(value), '-').toLocaleLowerCase()
}
