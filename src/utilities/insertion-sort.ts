/**
 * Time:
 * - BestCase: **`O(N)`**
 * - AverageCase: **`O(N^2)`**
 * - WorstCase: **`O(N^2)`**
 *
 * Space = **`O(1)`**
 */
const insertionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i]!;
    let j = i - 1;

    /* Move elements of arr[0..i-1], that are
         greater than key, to one position ahead
         of their current position */
    while (j >= 0 && arr[j]! > key) {
      arr[j + 1] = arr[j]!;
      j = j - 1;
    }

    arr[j + 1] = key;
  }
};

export default insertionSort;
