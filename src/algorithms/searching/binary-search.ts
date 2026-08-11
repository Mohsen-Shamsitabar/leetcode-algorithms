/**
 * **Time Complexity:** BC = *`O(1)`*, AC/WC = *`O(logn)`*.
 * **Space Complexity:** *`O(1)`*.
 * @description
 * Must be used on a **Sorted** array!
 * @link
 * https://www.geeksforgeeks.org/dsa/binary-search/
 */
const iterativeBinarySearch = <T>(nums: T[], target: T): number => {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0] === target ? 0 : -1;

  let startIdx = 0;
  let endIdx = nums.length - 1;

  while (startIdx !== endIdx) {
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    const middleNumber = nums[middleIdx]!;

    if (middleNumber === target) return middleIdx;

    if (middleNumber < target) {
      startIdx = middleIdx + 1;
      continue;
    }

    endIdx = middleIdx - 1;
  }

  if (nums[startIdx] === target) {
    return startIdx;
  }

  return -1;
};

const _recursiveBinarySearch = <T>(nums: T[], target: T): number => {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0] === target ? 0 : -1;

  const checkRange = (start: number, end: number): number => {
    if (start === end) {
      return nums[start] === target ? start : -1;
    }

    const middleIdx = Math.floor((start + end) / 2);
    const middleNumber = nums[middleIdx]!;

    if (middleNumber === target) return middleIdx;

    if (middleNumber < target) return checkRange(middleIdx + 1, end);

    return checkRange(start, middleIdx - 1);
  };

  return checkRange(0, nums.length - 1);
};

export { iterativeBinarySearch as binarySearch };
