import type { SingleSize } from './types'

export const typeSafePaddings = (padding: SingleSize) => {
  if (typeof padding === 'string') {
    return parseFloat(padding)
  }

  return padding
}
