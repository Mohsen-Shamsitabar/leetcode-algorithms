/**
 * TIME = **`O(N^2)`**
 * SPACE = **`O(N)`**
 * @description
 * Throws error: Time limit exeeded (bad time complexity)!
 */
const _bruteForce = (temperatures: number[]): number[] => {
  return temperatures.map((currTemp, idx) => {
    for (let j = idx; j < temperatures.length; j++) {
      if (temperatures[j] > currTemp) {
        return j - idx;
      }
    }

    return 0;
  });
};

/**
 * TIME = SPACE = **`O(N)`**
 */
const dailyTemperatures = (temperatures: number[]): number[] => {
  const answer = new Array<number>(temperatures.length).fill(0);
  const idxStack: number[] = [];

  temperatures.forEach((currentTemp, currentIdx) => {
    while (
      idxStack.length &&
      currentTemp > temperatures[idxStack[idxStack.length - 1]]
    ) {
      const poppedIdx = idxStack.pop()!;
      answer[poppedIdx] = currentIdx - poppedIdx;
    }

    idxStack.push(currentIdx);
  });

  return answer;
};

export default dailyTemperatures;
