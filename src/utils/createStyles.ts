import { FlexStyle } from 'react-native'

import { SpaceType } from '../constants'
import type { Size } from '../types'

export const createStyles = (size: Size, type: SpaceType): FlexStyle => {
  switch (size.length) {
    case 1: {
      const [all] = size

      return {
        [type]: all,
      }
    }

    case 2: {
      const [vertical, horizontal] = size

      return {
        [`${type}Vertical`]: vertical,
        [`${type}Horizontal`]: horizontal,
      }
    }

    case 3: {
      const [top, horizontal, bottom] = size

      return {
        [`${type}Top`]: top,
        [`${type}Horizontal`]: horizontal,
        [`${type}Bottom`]: bottom,
      }
    }

    case 4: {
      const [top, right, bottom, left] = size

      return {
        [`${type}Top`]: top,
        [`${type}Right`]: right,
        [`${type}Bottom`]: bottom,
        [`${type}Left`]: left,
      }
    }

    default:
      throw new Error(`Unsupported ${type} value`)
  }
}
