/**
 * Time = Space = **`O(n)`**
 */
const solution = (arr: unknown[], size: number): unknown[][] => {
  const result: unknown[][] = [];

  let tempArr: unknown[] = [];

  arr.forEach(val => {
    tempArr.push(val);

    if (tempArr.length === size) {
      result.push(tempArr);
      tempArr = [];
    }
  });

  if (tempArr.length > 0) result.push(tempArr);

  return result;
};

export default solution;
