import { createStyles } from './createStyles'
import type { Size } from './types'

export const marginally = (...margins: Size) => {
  return createStyles(margins, 'margin')
}
