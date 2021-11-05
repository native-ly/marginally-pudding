import { createStyles } from './createStyles'
import { SpaceType } from '../constants'
import type { Size } from '../types'

export const marginally = (...margins: Size) => {
  return createStyles(margins, SpaceType.Margin)
}
