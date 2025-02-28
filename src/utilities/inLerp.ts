/**
 * @description Calculates the ratio of the given value between [a,b].
 * @param a Initial value.
 * @param b Final value.
 * @param v Given value.
 * @returns a number between [0,1].
 */
const inLerp = (a: number, b: number, v: number) => (v - a) / (b - a);

export default inLerp;
