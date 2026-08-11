// https://www.geeksforgeeks.org/dsa/heap-sort/

import { buildMaxHeap, heapify } from "../heapify.ts";

/**
 * Time = **`O(nLogn)`**
 * Space = **`O(n)`**
 */
const heapSort = (arr: number[]): void => {
  const n = arr.length;

  // 1. Build max heap
  buildMaxHeap(arr);

  // 2. Extract elements one by one
  for (let end = n - 1; end > 0; end--) {
    // Move current max to the end
    [arr[0], arr[end]] = [arr[end]!, arr[0]!];

    // Restore heap property on the reduced heap
    heapify(arr, end, 0);
  }
};

export { heapSort };
