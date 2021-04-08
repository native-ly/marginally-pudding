import { pudding } from '../src'

import { data } from '../__mocks__/data'

describe('pudding', () => {
  it.each(data('padding'))('should create paddings', (params, expected) => {
    expect(pudding(...params)).toEqual(expected)
  })

  it('should throw error for not supported params', () => {
    try {
      pudding(...([40, 30, 20, 10, 0] as any))
    } catch (e) {
      expect(e.message).toBe('Unsupported padding value')
    }
  })
})
