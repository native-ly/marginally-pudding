import { createStyles } from './createStyles'
import { Space } from '../constants'
import type { Size } from '../types'

export const marginally = (...margins: Size) => {
  return createStyles(margins, Space.Margin)
}
