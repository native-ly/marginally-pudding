# [Marginally Pudding](https://github.com/native-ly/marginally-pudding)

[![NPM version](https://flat.badgen.net/npm/v/marginally-pudding)](https://www.npmjs.com/package/marginally-pudding)
[![NPM downloads](https://flat.badgen.net/npm/dm/marginally-pudding)](https://www.npmjs.com/package/marginally-pudding)
[![NPM license](https://flat.badgen.net/npm/license/marginally-pudding)](https://www.npmjs.com/package/marginally-pudding)
[![run in expo snack](https://img.shields.io/badge/Run%20in%20Snack-4630EB?style=flat-square&logo=EXPO&labelColor=FFF&logoColor=000)](https://snack.expo.io/@jbiesiada/marginally-pudding)
[![Codecov](https://flat.badgen.net/codecov/c/github/native-ly/marginally-pudding)](https://codecov.io/gh/native-ly/marginally-pudding)
[![Travis](https://flat.badgen.net/travis/native-ly/marginally-pudding)](https://travis-ci.com/native-ly/marginally-pudding)
[![Bundle size](https://flat.badgen.net/packagephobia/install/marginally-pudding)](https://packagephobia.com/result?p=marginally-pudding)

## About

Create margins and paddings in React Native in the way well known from CSS

## How to Install

First, install the library in your project by npm:

```sh
$ npm install marginally-pudding
```

Or Yarn:

```sh
$ yarn add marginally-pudding
```

## Getting Started

**Connect the library with the project using ES6 import:**

```js
import { marginally, pudding } from 'marginally-pudding'
```

## Options

You can use the functions with the following combinations:

- `(all)`
- `(vertical, horizontal)`
- `(top, horizontal, bottom)`
- `(top, right, bottom, left)`

All params are `number` or `string` type

## Example

```jsx
import React from 'react'
import { View } from 'react-native'
import { marginally, pudding } from 'marginally-pudding'

const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        ...marginally(20, 10),
        // marginVertical: 20,
        // marginHorizontal: 10,

        ...pudding(0, 20, 15),
        // paddingTop: 0,
        // paddingHorizontal: 20,
        // paddingBottom: 15,
      }}
    />
  )
}

export default App
```

## License

This project is licensed under the MIT License © 2021-present Jakub Biesiada
