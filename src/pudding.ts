import { create } from './create'
import type { Padding } from './types'

export const pudding = (paddings: Padding) => {
  return create(paddings, 'padding')
}
