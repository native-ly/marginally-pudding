import { createStyles } from './createStyles'
import { Space } from '../constants'
import type { Size } from '../types'

export const pudding = (...paddings: Size) => {
  return createStyles(paddings, Space.Padding)
}
