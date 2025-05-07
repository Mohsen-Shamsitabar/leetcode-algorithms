/**
 * Time = Space = **`O(n)`**
 */
const solution = (pattern: string): string => {
  const n = pattern.length;

  const arr = new Array<string>(n + 1).fill("").map((_, idx) => `${idx + 1}`);

  const reverseArr = (array: unknown[], fromIdx: number, toIdx: number) => {
    while (fromIdx < toIdx) {
      [array[fromIdx], array[toIdx]] = [array[toIdx]!, array[fromIdx]!];
      fromIdx++;
      toIdx--;
    }
  };

  let i = 0;
  let j = 0;
  let flagged = false;

  while (i < n) {
    if (pattern[i] === "I") {
      if (flagged) {
        reverseArr(arr, j, i);
        i++;
        j = i;
        flagged = false;
        continue;
      }

      i++;
      j++;
      continue;
    }

    if (!flagged) flagged = true;
    i++;

    if (flagged && i === n) {
      reverseArr(arr, j, i);
      break;
    }
  }

  return arr.join("");
};

export default solution;
