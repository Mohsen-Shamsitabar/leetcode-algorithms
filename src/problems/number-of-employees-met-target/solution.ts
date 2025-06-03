/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (hours: number[], target: number): number => {
  let result = 0;

  for (const hour of hours) {
    if (hour >= target) result++;
  }

  return result;
};

export default solution;
