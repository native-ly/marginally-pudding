import { pudding } from '../src'

import { data } from './data'

describe('pudding', () => {
  it.each(data('padding'))('should', (params: any, expected) => {
    expect(pudding(...params)).toEqual(expected)
  })
})
