/**
 * generics types are same as variables passed to a function (type/interface here)
 * if you want not to narrow down the type to be used in a sinlgle variable
 * or for a single data type, you can use a generic in the place and work on that generic
 * generated using angle brackets <>
 */

// this is a normal interface
interface Point {
  x: number;
  y: number;
}

// suppose i want to create a point with string characters (for any random reason)
// for some points, number coordinates are defined while for some, string is required
// i can create a new interface for that

interface PointWithString {
  x: string;
  y: string;
}

// now if you want to support both of this types for a point
// you may do something like
interface PointNew {
  x: number | string;
  y: number | string;
}

// but this approach gives both the types and at a particular point, I am not sure whether it is a string or number
// this is where generics come into play
interface FinalPoint<T> {
  x: T;
  y: T;
}

const point1: FinalPoint<number> = { x: 0, y: 0 }; // this is a number point
const point2: FinalPoint<string> = { x: "0", y: "0" }; // this is a string point

// you can also pass multiple generics (same as you pass parameters to a function)
interface FinalPoint2<T, U> {
  x: T;
  y: U;
}

const point3: FinalPoint2<number, string> = { x: 0, y: "0" }; // x is a number while y is a string

// generics passed work same ass basic data type and all other typescript magic works with this
interface FinalPoint3<T, U> {
  x: T;
  y: U;
  z: T | U;
  t: T extends U ? T : U;
}

const point4: FinalPoint3<number, string> = {
  x: 0,
  y: "0",
  z: 0,
  // @ts-expect-error
  t: 0, // number does not extend string data type
};
