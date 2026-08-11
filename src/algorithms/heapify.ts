// Right Child: 2i+2
// Left Child: 2i+1

const getRightChildIdxV1 = (i: number, j: number): number =>
  2 * (i - j) + 2 + j;

const getLeftChildIdxV1 = (i: number, j: number): number => 2 * (i - j) + 1 + j;

/**
 * Time = **`O(n^2)`**
 * Space = **`O(1)`**
 */
const _heapifyV1 = (arr: number[]): void => {
  for (let j = 0; j < arr.length; j++) {
    for (let i = arr.length - 1; i >= j; i--) {
      const leftChildIdx = getLeftChildIdxV1(i, j);
      const rightChildIdx = getRightChildIdxV1(i, j);

      const root = arr[i]!;
      const leftChild = arr[leftChildIdx];
      const rightChild = arr[rightChildIdx];

      if (leftChild === undefined && rightChild === undefined) {
        continue;
      }

      if (
        leftChild === undefined &&
        rightChild !== undefined &&
        rightChild > root
      ) {
        arr[i] = rightChild;
        arr[rightChildIdx] = root;

        continue;
      }

      if (
        leftChild !== undefined &&
        rightChild === undefined &&
        leftChild > root
      ) {
        arr[i] = leftChild;
        arr[leftChildIdx] = root;

        continue;
      }

      if (leftChild! > rightChild! && leftChild! > root) {
        arr[i] = leftChild!;
        arr[leftChildIdx] = root;

        continue;
      }

      if (leftChild! < rightChild! && rightChild! > root) {
        arr[i] = rightChild!;
        arr[rightChildIdx] = root;

        continue;
      }
    }
  }
};

// =========================== //

const getLeftChildIdx = (i: number): number => 2 * i + 1;
const getRightChildIdx = (i: number): number => 2 * i + 2;

/**
 * Time = **`O(nLogn)`**
 * Space = **`O(n)`**
 */
const heapify = (
  arr: number[],
  n: number = arr.length,
  i: number = 0
): void => {
  let largestValueIdx = i;

  const leftChildIdx = getLeftChildIdx(i);
  const rightChildIdx = getRightChildIdx(i);

  if (leftChildIdx < n && arr[leftChildIdx]! > arr[largestValueIdx]!) {
    largestValueIdx = leftChildIdx;
  }

  if (rightChildIdx < n && arr[rightChildIdx]! > arr[largestValueIdx]!) {
    largestValueIdx = rightChildIdx;
  }

  if (largestValueIdx !== i) {
    [arr[i], arr[largestValueIdx]] = [arr[largestValueIdx]!, arr[i]!];
    heapify(arr, n, largestValueIdx); // continue bubbling down
  }
};

const buildMaxHeapInPlace = (arr: number[]) => {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
};

export { buildMaxHeapInPlace as buildMaxHeap, heapify };
