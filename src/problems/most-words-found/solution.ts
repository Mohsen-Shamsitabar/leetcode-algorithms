/**
 * Time = **`O(n * m)`**
 * Space = **`O(1)`**
 */
const solution = (sentences: string[]): number => {
  let result = 0;

  sentences.forEach(sentence => {
    let wordCount = 0;

    for (const char of sentence) {
      if (char !== " ") continue;

      wordCount++;
    }

    result = Math.max(result, wordCount + 1);
  });

  return result;
};

export default solution;
