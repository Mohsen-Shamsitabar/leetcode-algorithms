// https://www.geeksforgeeks.org/dsa/bubble-sort-algorithm/

/**
 * Time = **`O(n^2)`**
 * Space = **`O(1)`**
 */
const inPlaceBubbleSort = (arr: number[]) => {
  if (arr.length <= 1) return;

  for (let k = 0; k < arr.length - 1; k++) {
    for (let i = 1; i <= arr.length - k - 1; i++) {
      const j = i - 1;

      const jNum = arr[j]!;
      const iNum = arr[i]!;

      if (iNum >= jNum) continue;

      arr[j] = iNum;
      arr[i] = jNum;
    }
  }
};

/**
 * Time = **`O(n^2)`**
 * Space = **`O(n)`**
 */
const bubbleSort = (arr: number[]): number[] => {
  const copy = [...arr];

  inPlaceBubbleSort(copy);

  return copy;
};

export { bubbleSort as bubbleSort };
