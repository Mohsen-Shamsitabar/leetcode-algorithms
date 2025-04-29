/**
 * Time = **`O(n)`**.
 * Space = **`O(1)`** if we dont consider `result`.
 */
const solution = (nums: number[]): number[] => {
  const result: number[] = [];
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i]!);

    nums[num - 1] = -Math.abs(nums[num - 1]!);
  }

  nums.forEach((num, idx) => {
    if (num < 0) return;

    result.push(idx + 1);
  });

  return result;
};

export default solution;
