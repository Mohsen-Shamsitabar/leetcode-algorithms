/**
 * Time:
 * - BestCase: **`O(n log(n))`**
 * - AverageCase: **`O(n log(n))`**
 * - WorstCase: **`O(n^2)`**
 *
 * Space = **`O(1)`**
 */
const shellSort = (arr: number[]) => {
  const n = arr.length;

  // Start with a big gap, then reduce the gap
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Do a gapped insertion sort for this gap size.
    for (let i = gap; i < n; i++) {
      const temp = arr[i]!;
      let j = i;

      while (j >= gap && arr[j - gap]! > temp) {
        arr[j] = arr[j - gap]!;
        j -= gap;
      }

      arr[j] = temp;
    }
  }
};

export default shellSort;
