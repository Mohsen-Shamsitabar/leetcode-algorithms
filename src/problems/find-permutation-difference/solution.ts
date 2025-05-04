/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (s: string, t: string): number => {
  const length = s.length;
  const alphabetMap = new Map<string, number>();
  let result = 0;

  for (let i = 0; i < length; i++) {
    const char = s[i]!;

    alphabetMap.set(char, i);
  }

  for (let i = 0; i < length; i++) {
    const char = t[i]!;

    const prevIdx = alphabetMap.get(char)!;

    result += Math.abs(prevIdx - i);
  }

  return result;
};

export default solution;
