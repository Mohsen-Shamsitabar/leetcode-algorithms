// https://www.geeksforgeeks.org/dsa/insertion-sort-algorithm/

/**
 * Time = **`O(n^2)`**
 * Space = **`O(1)`**
 */
const inPlaceInsertionSort = (arr: number[]): void => {
  if (arr.length <= 1) return;

  let dividerIdx = 1;

  while (dividerIdx < arr.length) {
    let i = dividerIdx;
    let j = i - 1;

    while (arr[j]! >= arr[i]!) {
      [arr[i], arr[j]] = [arr[j]!, arr[i]!];
      i--;
      j--;
    }

    dividerIdx++;
  }
};

/**
 * Time = **`O(n^2)`**
 * Space = **`O(n)`**
 */
const insertionSort = (arr: number[]): number[] => {
  const copy = [...arr];

  if (arr.length <= 1) return copy;

  inPlaceInsertionSort(copy);

  return copy;
};

export { insertionSort };
