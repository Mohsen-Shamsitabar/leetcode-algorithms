/**
 * *`O(N^2)`*.
 */
const findWordsContaining = (words: string[], x: string): number[] => {
  const result: number[] = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.includes(x)) result.push(i);
  }

  return result;
};

export default findWordsContaining;
