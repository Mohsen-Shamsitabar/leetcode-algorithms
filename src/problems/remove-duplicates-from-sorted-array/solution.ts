/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (nums: number[]): number => {
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]!;
      k++;
    }
  }

  return k;
};

export default solution;
