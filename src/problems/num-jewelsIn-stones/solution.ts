/**
 * Time = Space = **`O(n)`**
 */
const solution = (jewels: string, stones: string): number => {
  const jewelsArr = jewels.split("");

  const set = new Set(jewelsArr);

  let result = 0;

  for (const char of stones) {
    if (set.has(char)) {
      result++;
    }
  }

  return result;
};

export default solution;
