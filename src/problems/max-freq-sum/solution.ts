/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (s: string): number => {
  const map = new Map<string, number>();
  const vowels = new Set<string>(["a", "e", "i", "o", "u"]);

  for (const char of s) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  let maxVowelFreq = 0;
  let maxConsonantFreq = 0;

  map.forEach((count, char) => {
    if (vowels.has(char)) {
      maxVowelFreq = Math.max(count, maxVowelFreq);
    } else {
      maxConsonantFreq = Math.max(count, maxConsonantFreq);
    }

    // map.delete(char);
  });

  return maxConsonantFreq + maxVowelFreq;
};

export default solution;
