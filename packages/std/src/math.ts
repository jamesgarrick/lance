import {
  abs,
  acos,
  asin,
  atan,
  atan2,
  ceil,
  cos,
  exp,
  floor,
  ln,
  pi,
  random,
  round,
  selectMax,
  selectMin,
  sin,
  sqrt,
  tan
} from '@lance/core';

export declare const Infinity: number;

export class Math {
  static get PI(): number {
      return pi();
  }

  static get E(): number {
      return 2.718281828459045;
  }

  static get LN2(): number {
      return 0.6931471805599453;
  }

  static get LN10(): number {
      return 2.302585092994046;
  }

  static get LOG2E(): number {
      return 1.4426950408889634;
  }

  static get LOG10E(): number {
      return 0.4342944819032518;
  }

  static get SQRT2(): number {
      return 1.4142135623730951;
  }

  static get SQRT1_2(): number {
      return 0.7071067811865476;
  }

  /**
   * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
   * For example, the absolute value of -5 is the same as the absolute value of 5.
   * @param x A numeric expression for which the absolute value is needed.
   */
  static abs(x: number): number {
    return abs(x)
  }

  static acos(x: number): number {
    return acos(x)
  }

  static asin(x: number): number {
    return asin(x)
  }

  static atan(x: number): number {
    return atan(x)
  }

  static atan2(y: number, x: number): number {
    return atan2(y, x)
  }

  static ceil(x: number): number {
    return ceil(x)
  }

  static cos(x: number): number {
    return cos(x)
  }

  static exp(x: number): number {
    return exp(x)
  }

  static floor(x: number): number {
    return floor(x)
  }

  static log(x: number): number {
    return ln(x)
  }

  static min(...values: number[]): number {
      if (values.length === 0) return Infinity;
      return selectMin(values as (number | boolean)[]);
  }

  static max(...values: number[]): number {
      if (values.length === 0) return -Infinity;
      return selectMax(values as (number | boolean)[]);
  }

  static pow(x: number, y: number): number {
    return x ** y; // SQF is ^
  }

  static random(): number {
    return random(1);
  }

  static round(x: number): number {
    return round(x);
  }

  static sin(x: number): number {
    return sin(x);
  }

  static sqrt(x: number): number {
    return sqrt(x);
  }

  static tan(x: number): number {
    return tan(x);
  }
}
