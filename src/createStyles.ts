import { FlexStyle } from 'react-native'

import type { Size, SpaceType } from './types'

export const createStyles = (size: Size, type: SpaceType): FlexStyle => {
  const unsupportedValues = [null, undefined] as any

  switch (size.length) {
    case 1: {
      let sizes = {} as FlexStyle

      if (!unsupportedValues.includes(size[0])) {
        sizes = { ...sizes, [type]: size[0] }
      }

      return sizes
    }

    case 2: {
      let sizes = {} as FlexStyle

      if (!unsupportedValues.includes(size[0])) {
        sizes = { ...sizes, [`${type}Vertical`]: size[0] }
      }

      if (!unsupportedValues.includes(size[1])) {
        sizes = { ...sizes, [`${type}Horizontal`]: size[1] }
      }

      return sizes
    }

    case 3: {
      let sizes = {} as FlexStyle

      if (!unsupportedValues.includes(size[0])) {
        sizes = { ...sizes, [`${type}Top`]: size[0] }
      }

      if (!unsupportedValues.includes(size[1])) {
        sizes = { ...sizes, [`${type}Horizontal`]: size[1] }
      }

      if (!unsupportedValues.includes(size[2])) {
        sizes = { ...sizes, [`${type}Bottom`]: size[2] }
      }

      return sizes
    }

    case 4: {
      let sizes = {} as FlexStyle

      if (!unsupportedValues.includes(size[0])) {
        sizes = { ...sizes, [`${type}Top`]: size[0] }
      }

      if (!unsupportedValues.includes(size[1])) {
        sizes = { ...sizes, [`${type}Right`]: size[1] }
      }

      if (!unsupportedValues.includes(size[2])) {
        sizes = { ...sizes, [`${type}Bottom`]: size[2] }
      }

      if (!unsupportedValues.includes(size[3])) {
        sizes = { ...sizes, [`${type}Left`]: size[3] }
      }

      return sizes
    }

    default:
      throw new Error(`Unsupported ${type} value`)
  }
}
