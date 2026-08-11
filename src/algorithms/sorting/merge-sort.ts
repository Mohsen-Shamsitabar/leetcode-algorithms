// https://www.geeksforgeeks.org/dsa/merge-sort/

/**
 * Time = **`O(nLogn)`**
 * Space = **`O(n)`**
 */
const merge = (arr1: number[], arr2: number[]): number[] => {
  const result: number[] = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    const num1 = arr1[i];
    const num2 = arr2[j];

    if (num1 === undefined) {
      result.push(num2!);
      j++;
      continue;
    }

    if (num2 === undefined) {
      result.push(num1);
      i++;
      continue;
    }

    if (num1 >= num2) {
      result.push(num2);
      j++;
      continue;
    } else {
      result.push(num1);
      i++;
      continue;
    }
  }

  return result;
};

const split = (array: number[]): number[] => {
  if (array.length <= 1) return array;

  const middleIdx = Math.floor((array.length - 1) / 2);
  const rightArr: number[] = [];
  const leftArr: number[] = [];

  for (let i = 0; i < array.length; i++) {
    if (i <= middleIdx) {
      leftArr.push(array[i]!);
    } else {
      rightArr.push(array[i]!);
    }
  }

  return merge(split(leftArr), split(rightArr));
};

const mergeSort = (arr: number[]) => {
  if (arr.length <= 1) return arr;

  return split(arr);
};

export { mergeSort };
