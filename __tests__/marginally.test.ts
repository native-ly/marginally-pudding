import { marginally } from '../src'

import { testCases } from '../__mocks__/testCases'

describe('marginally', () => {
  it.each(testCases('margin'))('should create margins', (params, expected) => {
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
