export type SingleSize = number | string

export type Size =
  | SingleSize
  | [all: SingleSize]
  | [vertical: SingleSize, horizontal: SingleSize]
  | [top: SingleSize, horizontal: SingleSize, bottom: SingleSize]
  | [top: SingleSize, right: SingleSize, bottom: SingleSize, left: SingleSize]
