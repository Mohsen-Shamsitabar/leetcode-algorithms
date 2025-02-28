import inLerp from "./inLerp.ts";
import lerp from "./lerp.ts";

/**
 * @description Remaps the value of "v" which is between (oMin,oMax) to a value between (dMin,dMax), then returns the value.
 */
const remap = (
  v: number,
  oMin: number,
  oMax: number,
  dMin: number,
  dMax: number
): number => lerp(dMin, dMax, inLerp(oMin, oMax, v));

export default remap;
