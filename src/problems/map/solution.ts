/**
 * Time = Space = **`O(n)`**
 */
// const solution = (
//   arr: number[],
//   fn: (n: number, i: number) => number
// ): number[] => {
//   const result: number[] = [];

//   arr.forEach((num, idx) => result.push(fn(num, idx)));

//   return result;
// };

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (
  arr: number[],
  fn: (n: number, i: number) => number
): number[] => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i]!, i);
  }

  return arr;
};

export default solution;
