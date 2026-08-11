// https://www.geeksforgeeks.org/dsa/counting-sort/

/**
 * Time = **`O(n+m)`**
 * Space = **`O(n+m)`**
 */
const countingSort = (arr: number[]): number[] => {
  const result: number[] = new Array<number>(arr.length);

  let maxValue = -1;

  arr.forEach(value => {
    maxValue = Math.max(value, maxValue);
  });

  const counter: number[] = new Array<number>(maxValue + 1).fill(0);

  arr.forEach(value => counter[value]!++);

  for (let i = 1; i < counter.length; i++) {
    const j = i - 1;

    counter[i]! += counter[j]!;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const value = arr[i]!;

    counter[value]!--;
    const sortedIdx = counter[value]!;

    result[sortedIdx] = value;
  }

  return result;
};

export { countingSort };
