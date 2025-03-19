/**
 * Time = **`O(n^2)`**
 * Space = **`O(1)`**
 * @description **TIME LIMIT EXEEDED!**
 */
// const solution = (nums: number[]): number => {
//   for (let i = 0; i < nums.length - 1; i++) {
//     const iNum = nums[i]!;

//     for (let j = i + 1; j < nums.length; j++) {
//       const jNum = nums[j]!;

//       if (iNum === jNum) return iNum;
//     }
//   }

//   return -1;
// };

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 * @description It **modifies** the array `nums`,
 * so this is not acceptable!
 */
// const solution = (nums: number[]): number => {
//   for (const num of nums) {
//     const index = Math.abs(num);

//     if (nums[index]! < 0) return index;

//     nums[index] = -nums[index]!;
//   }

//   return -1;
// };

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (nums: number[]): number => {
  let slow = nums[0]!;
  let fast = nums[slow]!;

  while (slow !== fast) {
    slow = nums[slow]!;
    fast = nums[nums[fast]!]!;
  }

  fast = 0;
  while (slow !== fast) {
    slow = nums[slow]!;
    fast = nums[fast]!;
  }

  return fast;
};

export default solution;
