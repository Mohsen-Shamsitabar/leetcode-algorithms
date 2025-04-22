/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (nums: number[]): number[] => {
  let prevSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prevSum += nums[i]!;

    nums[i] = prevSum;
  }

  return nums;
};

export default solution;
