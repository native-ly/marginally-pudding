import { FlexStyle } from 'react-native'

import { SpaceType } from '../SpaceType'
import type { Size } from '../types'

export const createStyles = (size: Size, type: SpaceType): FlexStyle => {
  switch (size.length) {
    case 1: {
      return {
        [type]: size[0],
      }
    }

    case 2: {
      return {
        [`${type}Vertical`]: size[0],
        [`${type}Horizontal`]: size[1],
      }
    }

    case 3: {
      return {
        [`${type}Top`]: size[0],
        [`${type}Horizontal`]: size[1],
        [`${type}Bottom`]: size[2],
      }
    }

    case 4: {
      return {
        [`${type}Top`]: size[0],
        [`${type}Right`]: size[1],
        [`${type}Bottom`]: size[2],
        [`${type}Left`]: size[3],
      }
    }

    default:
      throw new Error(`Unsupported ${type} value`)
  }
}
