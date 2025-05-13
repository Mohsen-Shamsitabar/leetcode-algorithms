/**
 * Time = **`O(n * m)`**
 * Space = **`O(1)`**
 */
const solution = (nums1: number[], nums2: number[], k: number): number => {
  let result = 0;

  for (const num1 of nums1) {
    for (const num2 of nums2) {
      if (num1 % (num2 * k) === 0) result++;
    }
  }

  return result;
};

export default solution;
