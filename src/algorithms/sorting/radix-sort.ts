// https://www.geeksforgeeks.org/dsa/radix-sort/

const countSort = (arr: number[], exp: number) => {
  const length = arr.length;
  const output = Array<number>(length); // output array
  const count = Array(10).fill(0, 0);

  // Store count of occurrences in count[]
  for (let i = 0; i < length; i++) {
    const digit = Math.floor(arr[i]! / exp) % 10;

    count[digit]++;
  }

  // Change count[i] so that count[i] now contains
  // actual position of this digit in output[]
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i]! / exp) % 10;

    output[count[digit] - 1] = arr[i]!;
    count[digit]--;
  }

  return output;
};

/**
 * Time = **`O(d*(n+b))`**
 * Space = **`O(n+b)`**
 * d = digit count.
 * n = elements.
 * b = base num system. (1,10,100,...)
 */
const radixSort = (arr: number[]) => {
  if (arr.length <= 1) return arr;

  // Find the maximum number to know number of digits
  let maxNumber = arr[0]!;

  arr.forEach(value => (maxNumber = Math.max(value, maxNumber)));

  // Create a shallow copy where the sorted values will be kept
  let sortedArr = [...arr];

  // Do counting sort for every digit. Note that
  // instead of passing digit number, exp is passed.
  // exp is 10^i where i is current digit number
  for (let exp = 1; Math.floor(maxNumber / exp) > 0; exp *= 10) {
    const sortedIteration = countSort(sortedArr, exp);

    sortedArr = sortedIteration;
  }

  return sortedArr;
};

export { radixSort };
