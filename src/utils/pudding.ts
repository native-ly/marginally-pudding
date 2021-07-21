import { createStyles } from './createStyles'
import { SpaceType } from '../SpaceType'
import type { Size } from '../types'

export const pudding = (...paddings: Size) => {
  return createStyles(paddings, SpaceType.Padding)
}
