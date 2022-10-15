export type Point2D = {
  x: number;
  y: number;
};

/*
 * We can create objects that confirms to this type
 * but in some cases, what we want is to create objects that do not change over time
 * and cannot be changed
 * in short ->  we want to make some objects readonly
 */

const origin: Point2D = { x: 0, y: 0 };
origin.x = 100; // this should give error

// We can make use of the Readonly generic in typescript to make values readonly
const fixedOrigin: Readonly<Point2D> = { x: 0, y: 0 };
// @ts-expect-error
fixedOrigin.x = 100; // now this gives error
// @ts-expect-error
fixedOrigin.y = 0; // also gives error

// even if we assign the same value again to the same readonly type, it generates errors
// this proves that the values cannot be reassigned

export type ComplexPoint = {
  spacial: {
    x: number;
    y: number;
    z: number;
  };
  time: string | number;
  axial: {
    r: number;
    theta: number;
  };
};

const complexOrigin: Readonly<ComplexPoint> = {
  spacial: { x: 0, y: 0, z: 0 },
  time: 0,
  axial: { r: 0, theta: 0 },
};

// @ts-expect-error
complexOrigin.spacial = {}; // this gives error

// does not work for nested interfaces
complexOrigin.spacial.x = 100; // this does not give error
