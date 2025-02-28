/**
 * @description (Linear interpolation): Calculates a value between two different values, based on the ratio value "t".
 * @param a Initial Value.
 * @param b Final Value.
 * @param t Ratio (a number from [0,1])
 */
const lerp = (a: number, b: number, t: number) => a + t * (b - a);

export default lerp;
