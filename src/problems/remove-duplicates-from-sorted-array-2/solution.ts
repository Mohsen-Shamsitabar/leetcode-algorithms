/**
 * *`O(N)`*.
 */
const solution = (nums: number[]): number => {
  const length = nums.length;

  if (length <= 2) return length;

  let prev: null | number = null;
  let count = 0;

  let i = 0;
  let k = length;

  while (i < k) {
    const current = nums[i]!;

    if (prev === null) {
      prev = current;
    }

    if (prev === current) {
      count++;
    } else {
      count = 1;
    }

    if (count > 2) {
      nums.splice(i, 1);
      nums.push(current);
      k--;
      prev = current;
    } else {
      prev = current;
      i++;
    }
  }

  return k;
};

export default solution;
