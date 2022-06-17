import { createStyles } from './createStyles'
import { SpaceType } from '../constants'
import type { Size } from '../types'

export const pudding = (...paddings: Size) => {
  return createStyles(paddings, SpaceType.Padding)
}
