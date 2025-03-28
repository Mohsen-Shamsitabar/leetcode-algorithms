/**
 * Time = Space = **`O(n)`**
 */
// const solution = (nums: number[]): number[] => {
//   const length = nums.length;

//   const result = new Array<number>(length);

//   nums.forEach((num, idx) => (result[idx] = nums[num]!));

//   return result;
// };

// === === === ===

/**
 * Time = **`O(n)`**,
 * Space = **`O(1)`**
 */
const solution = (nums: number[]): number[] => {
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    nums[i] = nums[i]! + length * (nums[nums[i]!]! % length);
  }

  for (let i = 0; i < length; i++) {
    nums[i] = Math.floor(nums[i]! / length);
  }

  return nums;
};

export default solution;
