// https://www.geeksforgeeks.org/dsa/selection-sort-algorithm-2/

const inPlaceSelectionSort = (arr: number[]): void => {
  if (arr.length <= 1) return;

  for (let i = 0; i < arr.length - 1; i++) {
    let minimumIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j]! < arr[minimumIdx]!) minimumIdx = j;
    }

    [arr[i], arr[minimumIdx]] = [arr[minimumIdx]!, arr[i]!];
  }
};

const selectionSort = (arr: number[]): number[] => {
  const copy = [...arr];

  inPlaceSelectionSort(copy);

  return copy;
};

export { selectionSort };
