/**
 * Time = **`O(n log n)`**
 * Space = **`O(n)`**
 */
const solution = (nums: number[], k: number): number[] => {
  const resultSet = new Set<number>();
  const countMap = new Map<number, number>();

  type Tuple = [number, number];

  const merge = (left: Tuple[], right: Tuple[]) => {
    const tempArr: Tuple[] = [];

    while (left.length && right.length) {
      if (left[0]![1] < right[0]![1]) {
        tempArr.push(left.shift()!);
      } else {
        tempArr.push(right.shift()!);
      }
    }

    return [...tempArr, ...left, ...right];
  };

  const mergeSort = (tuples: Tuple[]): Tuple[] => {
    const fetchedTuple = [...tuples];

    if (fetchedTuple.length < 2) {
      return fetchedTuple;
    }

    const half = fetchedTuple.length / 2;

    const left = fetchedTuple.splice(0, half);

    return merge(mergeSort(left), mergeSort(fetchedTuple));
  };

  // count each unique number.
  nums.forEach(num => {
    const numCount = countMap.get(num) ?? 0;

    countMap.set(num, numCount + 1);
  });

  // sort entries using merge sort.
  const sortedEntries = mergeSort(Array.from(countMap.entries()));

  // find the k most frequent elements.
  for (let i = sortedEntries.length - 1; i >= 0; i--) {
    if (k === 0) break;
    k--;

    const [value, _] = sortedEntries[i]!;

    resultSet.add(value);
  }

  return Array.from(resultSet);
};

export default solution;
