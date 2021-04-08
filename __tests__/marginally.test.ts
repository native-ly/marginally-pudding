import { marginally } from '../src'

import { data } from '../__mocks__/data'

describe('marginally', () => {
  it.each(data('margin'))('should create margins', (params, expected) => {
    expect(marginally(...params)).toEqual(expected)
  })

  it('should throw error for not supported params', () => {
    try {
      marginally(...([40, 30, 20, 10, 0] as any))
    } catch (e) {
      expect(e.message).toBe('Unsupported margin value')
    }
  })
})
