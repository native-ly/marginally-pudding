import { FlexStyle } from 'react-native'

import { marginally, pudding } from '../src'
import type { Size } from '../src'
import { SpaceType } from '../src/SpaceType'

interface TestCase {
  readonly params: Size
  readonly expected: FlexStyle
}

const testCases = (type: SpaceType): TestCase[] => [
  {
    params: [20],
    expected: {
      [`${type}`]: 20,
    },
  },
  {
    params: ['102'],
    expected: {
      [`${type}`]: '102',
    },
  },
  {
    params: [15, 20],
    expected: {
      [`${type}Vertical`]: 15,
      [`${type}Horizontal`]: 20,
    },
  },
  {
    params: ['0', '12'],
    expected: {
      [`${type}Vertical`]: '0',
      [`${type}Horizontal`]: '12',
    },
  },
  {
    params: [16, 33, 24],
    expected: {
      [`${type}Top`]: 16,
      [`${type}Horizontal`]: 33,
      [`${type}Bottom`]: 24,
    },
  },
  {
    params: [2, 1, 3, 7],
    expected: {
      [`${type}Top`]: 2,
      [`${type}Right`]: 1,
      [`${type}Bottom`]: 3,
      [`${type}Left`]: 7,
    },
  },
  {
    params: ['3', '3', '3', '2'],
    expected: {
      [`${type}Top`]: '3',
      [`${type}Right`]: '3',
      [`${type}Bottom`]: '3',
      [`${type}Left`]: '2',
    },
  },
  {
    params: [-1, '000000002', 1_000, 0x1234],
    expected: {
      [`${type}Top`]: -1,
      [`${type}Right`]: '000000002',
      [`${type}Bottom`]: 1000,
      [`${type}Left`]: 4660,
    },
  },
]

// TODO? add types
describe.each([
  {
    name: 'marginally',
    util: marginally,
    cases: SpaceType.Margin,
    styleNameSingular: 'margin',
    styleNamePlural: 'margins',
  },
  {
    name: 'pudding',
    util: pudding,
    cases: SpaceType.Padding,
    styleNameSingular: 'padding',
    styleNamePlural: 'paddings',
  },
])('$name', ({ util, cases, styleNamePlural, styleNameSingular }) => {
  it.each(testCases(cases))(
    `should create ${styleNamePlural} for $params`,
    ({ params, expected }) => {
      expect(util(...params)).toEqual(expected)
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
