import { createStyles } from './createStyles'
import { SpaceType } from './SpaceType'
import type { Size } from './types'

export const marginally = (...margins: Size) =>
  createStyles(margins, SpaceType.Margin)
