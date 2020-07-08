/**
 * @see https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-421529650
 */
export type Equals<T, U> = (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U ? 1 : 2
  ? 1
  : 0;

export const staticAssert = <_ extends 1>(): void => {};
