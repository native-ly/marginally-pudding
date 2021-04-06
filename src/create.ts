import { ViewStyle } from 'react-native'
import { Padding } from './types'
import { typeSafePaddings } from './utils' // TODO rename

// TODO rename
export const create = (
  size: Padding,
  type: 'padding' | 'margin'
): ViewStyle => {
  if (typeof size === 'number' || typeof size === 'string') {
    return { [type]: typeSafePaddings(size) }
  }

  switch (size.length) {
    case 1: {
      return {
        [type]: typeSafePaddings(size[0]),
      }
    }

    case 2: {
      return {
        [`${type}Vertical`]: typeSafePaddings(size[0]),
        [`${type}Horizontal`]: typeSafePaddings(size[1]),
      }
    }

    case 3: {
      return {
        [`${type}Top`]: typeSafePaddings(size[0]),
        [`${type}Horizontal`]: typeSafePaddings(size[1]),
        [`${type}Bottom`]: typeSafePaddings(size[2]),
      }
    }

    case 4: {
      return {
        [`${type}Top`]: typeSafePaddings(size[0]),
        [`${type}Right`]: typeSafePaddings(size[1]),
        [`${type}Bottom`]: typeSafePaddings(size[2]),
        [`${type}Left`]: typeSafePaddings(size[3]),
      }
    }

    default: {
      throw new Error('Unsupported padding value')
    }
  }
}
