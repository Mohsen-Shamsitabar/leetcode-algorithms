/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (s: string): number => {
  let result = 0;
  let counter = 0;

  for (const char of s) {
    if (char === "L") counter++;
    else counter--;

    if (counter === 0) result++;
  }

  return result;
};

export default solution;
