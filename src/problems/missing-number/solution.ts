/**
 * TIME: **`O(n)`**
 * SPACE: **`O(n)`**
 */
const _traversalApproach = (nums: number[]): number => {
  const numsSet = new Set<number>(nums);

  for (let num = 0; num <= numsSet.size; num++) {
    if (!numsSet.has(num)) return num;
  }

  return -1;
};

/**
 * TIME: **`O(n)`**
 * SPACE: **`O(1)`**
 */
const sumApproach = (nums: number[]): number => {
  const n = nums.length;
  const totalSum = (n * (n + 1)) / 2;
  const numsSum = nums.reduce((prev, curr) => prev + curr, 0);

  return totalSum - numsSum;
};

export default sumApproach;
