const merge = <T>(left: T[], right: T[]): T[] => {
  const arr = [] as T[];

  while (left.length && right.length) {
    if (left[0]! < right[0]!) {
      arr.push(left.shift()!);
    } else {
      arr.push(right.shift()!);
    }
  }

  return [...arr, ...left, ...right];
};

/**
 * **Time Complexity:** BC/AC/WC = *`O(nLogn)`*.
 * **Space Complexity:** *`O(n)`* + space for temporary array used during merging.
 */
const mergeSort = <T>(array: T[]): T[] => {
  const fetchedArray = [...array];
  const half = fetchedArray.length / 2;

  if (fetchedArray.length < 2) {
    return fetchedArray;
  }

  const left = fetchedArray.splice(0, half);

  return merge(mergeSort(left), mergeSort(fetchedArray));
};

export default mergeSort;
