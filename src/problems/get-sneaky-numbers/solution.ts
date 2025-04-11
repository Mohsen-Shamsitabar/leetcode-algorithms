/**
 * Time = Space = **`O(n)`**
 */
const solution = (nums: number[]): number[] => {
  const visitedNums = new Set<number>();
  const result: number[] = [];

  nums.forEach(num => {
    if (visitedNums.has(num)) {
      result.push(num);
      return;
    }

    visitedNums.add(num);
  });

  return result;
};

export default solution;
