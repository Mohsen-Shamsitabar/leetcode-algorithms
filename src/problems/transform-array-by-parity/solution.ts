/**
 * Time = Space = **`O(n)`**
 */
// const solution = (nums: number[]): number[] => {
//   const length = nums.length;

//   let zeroCount = 0;

//   for (const num of nums) {
//     if (num % 2 === 0) zeroCount++;
//   }

//   const result = [];

//   for (let _ = 0; _ < length; _++) {
//     if (zeroCount > 0) {
//       zeroCount--;
//       result.push(0);

//       continue;
//     }

//     result.push(1);
//   }

//   return result;
// };

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (nums: number[]): number[] => {
  const length = nums.length;

  let zeroCount = 0;

  for (const num of nums) {
    if (num % 2 === 0) zeroCount++;
  }

  for (let i = 0; i < length; i++) {
    if (zeroCount > 0) {
      zeroCount--;
      nums[i] = 0;

      continue;
    }

    nums[i] = 1;
  }

  return nums;
};

export default solution;
