/**
 * *`O(N*M*C)`*
 */
const _firstApproach = (allowed: string, words: string[]): number => {
  let result = 0;

  for (const word of words) {
    const wordLength = word.length;

    for (let i = 0; i < wordLength; i++) {
      const char = word[i];

      if (!allowed.includes(char)) break;

      if (i === wordLength - 1) result++;
    }
  }

  return result;
};

/**
 * *`O(N*M)`*
 */
const secondApproach = (allowed: string, words: string[]): number => {
  let result = 0;

  const allowedSet: Set<string> = new Set(allowed);

  for (const word of words) {
    const wordLength = word.length;

    for (let i = 0; i < wordLength; i++) {
      const char = word[i];

      if (!allowedSet.has(char)) break;

      if (i === wordLength - 1) result++;
    }
  }

  return result;
};

export default secondApproach;
