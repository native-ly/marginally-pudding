import { FlexStyle } from 'react-native'

import { marginally, pudding, type Size } from '../src'
import { Space } from '../src/constants'

interface TestCase {
  readonly size: Size
  readonly style: FlexStyle
}

const testCases = (type: Space): TestCase[] => [
  {
    size: [20],
    style: {
      [`${type}`]: 20,
    },
  },
  {
    size: ['102'],
    style: {
      [`${type}`]: '102',
    },
  },
  {
    size: [15, 20],
    style: {
      [`${type}Vertical`]: 15,
      [`${type}Horizontal`]: 20,
    },
  },
  {
    size: ['0', '12'],
    style: {
      [`${type}Vertical`]: '0',
      [`${type}Horizontal`]: '12',
    },
  },
  {
    size: [16, 33, 24],
    style: {
      [`${type}Top`]: 16,
      [`${type}Horizontal`]: 33,
      [`${type}Bottom`]: 24,
    },
  },
  {
    size: [2, 1, 3, 7],
    style: {
      [`${type}Top`]: 2,
      [`${type}Right`]: 1,
      [`${type}Bottom`]: 3,
      [`${type}Left`]: 7,
    },
  },
  {
    size: ['3', '3', '3', '2'],
    style: {
      [`${type}Top`]: '3',
      [`${type}Right`]: '3',
      [`${type}Bottom`]: '3',
      [`${type}Left`]: '2',
    },
  },
  {
    size: [-1, '000000002', 1_000, 0x1234],
    style: {
      [`${type}Top`]: -1,
      [`${type}Right`]: '000000002',
      [`${type}Bottom`]: 1000,
      [`${type}Left`]: 4660,
    },
  },
]

describe.each([
  {
    name: 'marginally',
    util: marginally,
    cases: Space.Margin,
    styleNameSingular: 'margin',
    styleNamePlural: 'margins',
  },
  {
    name: 'pudding',
    util: pudding,
    cases: Space.Padding,
    styleNameSingular: 'padding',
    styleNamePlural: 'paddings',
  },
])('$name', ({ util, cases, styleNamePlural, styleNameSingular }) => {
  it.each(testCases(cases))(
    `should create ${styleNamePlural} for $params`,
    ({ size, style }) => {
      expect(util(...size)).toEqual(style)
    }
  )

  it('should throw an error for unsupported params', () => {
    try {
      util(...([40, 30, 20, 10, 0] as any))
    } catch (err) {
      expect(err.message).toBe(`Unsupported ${styleNameSingular} value`)
    }
  })
})
