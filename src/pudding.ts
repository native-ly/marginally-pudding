import { createStyles } from './createStyles'
import { SpaceType } from './SpaceType'
import type { Size } from './types'

export const pudding = (...paddings: Size) =>
  createStyles(paddings, SpaceType.Padding)
