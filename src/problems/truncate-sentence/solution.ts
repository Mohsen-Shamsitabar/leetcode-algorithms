/**
 * Time = Space = **`O(n)`**
 */
const solution = (s: string, k: number): string => {
  let result = "";
  let counter = 0;

  for (const char of s) {
    if (char === " ") {
      counter++;
      if (counter >= k) break;
    }

    result += char;
  }

  return result;
};

export default solution;
