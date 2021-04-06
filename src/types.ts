export type SingleSize = number | string

// TODO rename
export type Padding =
  | SingleSize
  | [all: SingleSize]
  | [vertical: SingleSize, horizontal: SingleSize]
  | [top: SingleSize, horizontal: SingleSize, bottom: SingleSize]
  | [top: SingleSize, right: SingleSize, bottom: SingleSize, left: SingleSize]
