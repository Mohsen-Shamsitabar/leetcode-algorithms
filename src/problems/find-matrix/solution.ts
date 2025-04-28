/**
 * Time = Space = O(n)
 */
const solution = (nums: number[]): number[][] => {
  const freq = new Array<number>(nums.length + 1).fill(0);
  const ans: number[][] = [];

  for (const c of nums) {
    if (freq[c]! >= ans.length) {
      ans.push([]);
    }

    ans[freq[c]!]!.push(c);
    freq[c]!++;
  }

  return ans;
};

export default solution;
