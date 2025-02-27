import { countPossibilities } from "../../utilities/index.ts";

/**
 * *`O(N^2)`*.
 */
// const solution = (nums: number[]): number => {
//   let result = 0;
//   const numsCount = nums.length;

//   for (let i = 0; i < numsCount - 1; i++) {
//     const iNum = nums[i];

//     for (let j = i + 1; j < numsCount; j++) {
//       const jNum = nums[j];

//       if (iNum === jNum) result++;
//     }
//   }

//   return result;
// };

/**
 * *`O(N)`*.
 */
const solution = (nums: number[]): number => {
  let result = 0;

  const numCounter: Map<number, number> = new Map();

  for (const num of nums) {
    const value = numCounter.get(num) ?? 0;

    numCounter.set(num, value + 1);
  }

  numCounter.forEach(value => {
    if (value > 1) {
      const possibilities = countPossibilities(2, value);

      result += possibilities;
    }
  });

  return result;
};

export default solution;
