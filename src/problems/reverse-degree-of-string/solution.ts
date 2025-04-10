/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (s: string): number => {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    const reversedAlpha = 27 - (charCode - 96);
    const product = reversedAlpha * (i + 1);

    sum += product;
  }

  return sum;
};

export default solution;
