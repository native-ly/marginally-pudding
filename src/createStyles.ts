import { ViewStyle } from 'react-native'
import type { Size, SpaceType } from './types'
import { typeSafeSize } from './utils'

// TODO update type (not only ViewStyle)
export const createStyles = (size: Size, type: SpaceType): ViewStyle => {
  switch (size.length) {
    case 1: {
      return {
        [type]: typeSafeSize(size[0]),
      }
    }

    case 2: {
      return {
        [`${type}Vertical`]: typeSafeSize(size[0]),
        [`${type}Horizontal`]: typeSafeSize(size[1]),
      }
    }

    case 3: {
      return {
        [`${type}Top`]: typeSafeSize(size[0]),
        [`${type}Horizontal`]: typeSafeSize(size[1]),
        [`${type}Bottom`]: typeSafeSize(size[2]),
      }
    }

    case 4: {
      return {
        [`${type}Top`]: typeSafeSize(size[0]),
        [`${type}Right`]: typeSafeSize(size[1]),
        [`${type}Bottom`]: typeSafeSize(size[2]),
        [`${type}Left`]: typeSafeSize(size[3]),
      }
    }

    default: {
      throw new Error(`Unsupported ${type} value`)
    }
  }
}
