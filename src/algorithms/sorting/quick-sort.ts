// https://www.geeksforgeeks.org/dsa/quick-sort-algorithm/

/**
 * Time = **`O(nLogn)`**
 * Space = **`O(nLogn)`**
 */
const quickSort = (arr: number[]): number[] => {
  const copy = [...arr];

  const partition = (array: number[]): number[] => {
    if (array.length <= 1) {
      return array;
    }

    const pivotIdx = Math.floor(array.length / 2);
    const pivotElement = array[pivotIdx]!;

    const lesserArr: number[] = [];
    const greaterArr: number[] = [];

    for (let i = 0; i < array.length; i++) {
      if (i === pivotIdx) continue;

      const iElement = array[i]!;

      if (iElement >= pivotElement) greaterArr.push(iElement);
      else lesserArr.push(iElement);
    }

    return partition(lesserArr)
      .concat([pivotElement])
      .concat(partition(greaterArr));
  };

  return partition(copy);
};

export { quickSort };
