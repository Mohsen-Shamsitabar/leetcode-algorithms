/**
 * **Time Complexity:** BC = *`O(1)`*, AC/WC = *`O(logn)`*.
 * **Space Complexity:** *`O(1)`*.
 * @description
 * Must be used on a **Sorted** array!
 */
const binarySearch = <T>(array: T[], target: T) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (array[middle]! < target) {
      start = middle + 1;
    } else if (array[middle]! > target) {
      end = middle - 1;
    } else if (array[middle] === target) {
      return middle;
    }
  }

  return -1;
};

export default binarySearch;
