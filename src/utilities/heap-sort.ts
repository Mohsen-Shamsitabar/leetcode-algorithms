// To heapify a subtree rooted with node i
// which is an index in arr[].
const heapify = (arr: number[], n: number, i: number) => {
  // Initialize largest as root
  let largest = i;

  // left index = 2*i + 1
  const l = 2 * i + 1;

  // right index = 2*i + 2
  const r = 2 * i + 2;

  // If left child is larger than root
  if (l < n && arr[l]! > arr[largest]!) {
    largest = l;
  }

  // If right child is larger than largest so far
  if (r < n && arr[r]! > arr[largest]!) {
    largest = r;
  }

  // If largest is not root
  if (largest !== i) {
    const temp = arr[i]!; // Swap

    arr[i] = arr[largest]!;
    arr[largest] = temp;

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
};

/**
 * Time = **`O(n log(n))`**
 * Space = **`O(1)`**
 *
 * Disadvantage:
 * - **Unstable:** Heap sort is unstable. It might rearrange the relative order.
 */
const heapSort = (arr: number[]) => {
  const n = arr.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    const temp = arr[0]!;

    arr[0] = arr[i]!;
    arr[i] = temp;

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
};

export default heapSort;
