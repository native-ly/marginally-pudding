import { createStyles } from './createStyles'
import type { Size } from './types'

export const pudding = (paddings: Size) => {
  return createStyles(paddings, 'padding')
}
