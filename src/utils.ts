import type { SingleSize } from './types'

export const typeSafeSize = (size: SingleSize) => {
  if (typeof size === 'string') {
    return parseFloat(size)
  }

  return size
}
