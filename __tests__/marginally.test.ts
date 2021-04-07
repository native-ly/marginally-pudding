import { marginally } from '../src'

import { data } from './data'

describe('marginally', () => {
  it.each(data('margin'))('should', (params: any, expected) => {
    expect(marginally(...params)).toEqual(expected)
  })
})
