/**
 * Time = Space = **`O(n)`**
 */
const solution = (nums: number[]): number[] => {
  const result: number[] = [];

  for (let i = 0; i < nums.length; i += 2) {
    const [freq, val] = [nums[i]!, nums[i + 1]!];

    for (let _ = 0; _ < freq; _++) result.push(val);
  }

  return result;
};

export default solution;
