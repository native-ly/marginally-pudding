import type { SpaceType } from '../src/types'

export const data = (type: SpaceType) => [
  [
    [20],
    {
      [`${type}`]: 20,
    },
  ],
  [
    ['102'],
    {
      [`${type}`]: 102,
    },
  ],
  [
    [15, 20],
    {
      [`${type}Vertical`]: 15,
      [`${type}Horizontal`]: 20,
    },
  ],
  [
    ['0', '12'],
    {
      [`${type}Vertical`]: 0,
      [`${type}Horizontal`]: 12,
    },
  ],
  [
    [16, 33, 24],
    {
      [`${type}Top`]: 16,
      [`${type}Horizontal`]: 33,
      [`${type}Bottom`]: 24,
    },
  ],
  [
    [2, 1, 3, 7],
    {
      [`${type}Top`]: 2,
      [`${type}Right`]: 1,
      [`${type}Bottom`]: 3,
      [`${type}Left`]: 7,
    },
  ],
  [
    ['3', '3', '3', '2'],
    {
      [`${type}Top`]: 3,
      [`${type}Right`]: 3,
      [`${type}Bottom`]: 3,
      [`${type}Left`]: 2,
    },
  ],
  [
    [NaN, 'lorem ipsum', null, undefined],
    {
      [`${type}Top`]: NaN,
      [`${type}Right`]: 3,
      [`${type}Bottom`]: 3,
      [`${type}Left`]: 2,
    },
  ],
  [
    [-1, '000000002', 1_000, 0x1234],
    // [-1, 000000002, 1_000, 0x1234],
    {
      [`${type}Top`]: NaN,
      [`${type}Right`]: 3,
      [`${type}Bottom`]: 3,
      [`${type}Left`]: 2,
    },
  ],
  [
    [
      '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
    ],
    {
      [`${type}Top`]: NaN,
      [`${type}Right`]: 3,
      [`${type}Bottom`]: 3,
      [`${type}Left`]: 2,
    },
  ],
  [
    ['20px', '50%'],
    {
      [`${type}Top`]: NaN,
      [`${type}Right`]: 3,
      [`${type}Bottom`]: 3,
      [`${type}Left`]: 2,
    },
  ],
]