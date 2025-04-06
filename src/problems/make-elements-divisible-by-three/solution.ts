/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (nums: number[]): number => {
  let result = 0;

  nums.forEach(num => {
    if (num % 3 === 0) return;

    if ((num + 1) % 3 === 0) result++;
    else if ((num - 1) % 3 === 0) result++;
  });

  return result;
};

export default solution;
