import { create } from './create'
import type { Padding } from './types'

export const marginally = (margins: Padding) => {
  return create(margins, 'margin')
}
