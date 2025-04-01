/**
 * Time = Space = **`O(n)`**
 */
// const solution = (nums: number[], pivot: number): number[] => {
//   const less: number[] = [];
//   const high: number[] = [];

//   let count = 0;

//   for (const num of nums) {
//     if (num < pivot) less.push(num);
//     else if (num === pivot) count++;
//     else high.push(num);
//   }

//   return [...less, ...Array<number>(count).fill(pivot), ...high];
// };

/**
 * Time = **`O(nlog(n))`**
 * Time = Space = **`O(1)`**
 */
const solution = (nums: number[], pivot: number): number[] => {
  return nums.sort((a, b) => Math.sign(a - pivot) - Math.sign(b - pivot));
};

export default solution;
