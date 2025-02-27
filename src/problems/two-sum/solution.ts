/**
 * *`O(N^2)`*.
 */
// const solution = (nums: number[], target: number): number[] => {
//   const result: number[] = [];

//   for (let i = 0; i < nums.length - 1; i++) {
//     const firstNum = nums[i]!;

//     for (let j = i + 1; j < nums.length; j++) {
//       const secondNum = nums[j]!;

//       if (firstNum + secondNum === target) {
//         result.push(i, j);
//       }
//     }
//   }

//   return result;
// };

/**
 * *`O(N)`*.
 */
const solution = (nums: number[], target: number): number[] => {
  const hashMap: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; ++i) {
    if (hashMap.has(target - nums[i]!)) {
      return [hashMap.get(target - nums[i]!)!, i];
    }

    hashMap.set(nums[i]!, i);
  }

  return [-1, -1];
};

export default solution;
