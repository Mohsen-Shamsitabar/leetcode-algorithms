/**
 * **Time Complexity:** BC/AC/WC = *`O(n^2)`*.
 * **Space Complexity:** *`O(1)`*.
 */
const selectionSort = <T>(array: T[]) => {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j]! < array[lowest]!) {
        lowest = j;
      }
    }

    if (lowest !== i) {
      [array[i], array[lowest]] = [array[lowest]!, array[i]!];
    }
  }

  return array;
};

export default selectionSort;
