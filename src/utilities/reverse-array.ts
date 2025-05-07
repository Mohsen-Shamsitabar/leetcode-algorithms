const reverseArray = (array: unknown[], fromIdx?: number, toIdx?: number) => {
  if (!fromIdx) fromIdx = 0;
  if (!toIdx) toIdx = array.length - 1;

  while (fromIdx < toIdx) {
    [array[fromIdx], array[toIdx]] = [array[toIdx]!, array[fromIdx]!];
    fromIdx++;
    toIdx--;
  }
};

export default reverseArray;
