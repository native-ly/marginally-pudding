# [Marginally Pudding](https://github.com/native-ly/marginally-pudding) (WIP)

[![NPM version](https://img.shields.io/npm/v/marginally-pudding?style=flat-square)](https://www.npmjs.com/package/marginally-pudding)
[![NPM downloads](https://img.shields.io/npm/dm/marginally-pudding?style=flat-square)](https://www.npmjs.com/package/marginally-pudding)
[![NPM license](https://img.shields.io/npm/l/marginally-pudding?style=flat-square)](https://www.npmjs.com/package/marginally-pudding)
[![run in expo snack](https://img.shields.io/badge/Run%20in%20Snack-4630EB?style=flat-square&logo=EXPO&labelColor=FFF&logoColor=000)](https://snack.expo.io/@jbiesiada/marginally-pudding)
[![Codecov](https://img.shields.io/codecov/c/github/native-ly/marginally-pudding?style=flat-square)](https://codecov.io/gh/native-ly/marginally-pudding)
[![Travis](https://img.shields.io/travis/native-ly/marginally-pudding/master?style=flat-square)](https://travis-ci.org/native-ly/marginally-pudding)

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

**• Connect libary with project using ES6 import:**

```js
import { marginally, pudding } from 'marginally-pudding'
```

## Options

## Example

```jsx
const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        ...marginally(20, 10),
        ...pudding(0, 20, 15),
      }}
    />
  )
}
```

## License

This project is licensed under the MIT License © 2021-present Jakub Biesiada
