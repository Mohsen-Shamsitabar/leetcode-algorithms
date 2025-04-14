/**
 * Time = **`O(n^2)`**
 * Space = **`O(1)`**
 */
// const solution = (nums: number[], target: number): number => {
//   const length = nums.length;
//   let result = 0;

//   if (length <= 1) return result;

//   for (let i = 0; i < length - 1; i++) {
//     const iNum = nums[i]!;

//     for (let j = i + 1; j < length; j++) {
//       const jNum = nums[j]!;

//       if (iNum + jNum < target) result++;
//     }
//   }

//   return result;
// };

/**
 * Time = **`O(n log n)`**
 * Space = **`O(1)`**
 */
const solution = (nums: number[], target: number): number => {
  nums.sort((a, b) => a - b);

  let result = 0;
  let leftIdx = 0;
  let rightIdx = nums.length - 1;

  while (leftIdx < rightIdx) {
    const leftNum = nums[leftIdx]!;
    const rightNum = nums[rightIdx]!;

    if (leftNum + rightNum < target) {
      result += rightIdx - leftIdx;

      leftIdx++;
      continue;
    }

    rightIdx--;
  }

  return result;
};

export default solution;
