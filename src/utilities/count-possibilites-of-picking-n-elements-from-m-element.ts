import factorial from "./factorial";

/**
 * count possibilites of picking n elements from m elements.
 * `m` >= `n`.
 */
const countPossibilities = (n: number, m: number) =>
  factorial(m) / (factorial(n) * factorial(m - n));

export default countPossibilities;
