const partition = <T>(array: T[], start: number, end: number) => {
  const pivotValue = array[start]!;
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivotValue > array[i]!) {
      swapIndex++;

      if (i !== swapIndex) {
        [array[i], array[swapIndex]] = [array[swapIndex]!, array[i]!];
      }
    }
  }

  if (swapIndex !== start) {
    [array[swapIndex], array[start]] = [array[start]!, array[swapIndex]!];
  }

  return swapIndex;
};

/**
 * **Time Complexity:** BC/AC = *`O(nLogn)`*, WC = *`O(n^2)`*.
 * **Space Complexity:** *`O(logn)`*.
 */
const quickSort = <T>(
  array: T[],
  start: number = 0,
  end: number = array.length - 1
) => {
  if (start >= end) return;

  const pivotIndex = partition(array, start, end);

  quickSort(array, start, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, end);

  return array;
};

export default quickSort;
