/**
 * Time = Space = **`O(n)`**
 */
// const solution = (n: number): number => {
//   const cache: number[] = [0, 1, 1];

//   let i = 2;

//   while (i <= n) {
//     const newValue = cache[i - 2]! + cache[i - 1]! + cache[i]!;

//     cache.push(newValue);
//     i++;
//   }

//   return cache[n]!;
// };

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let i = 0;
  let j = 1;
  let k = 1;

  while (n > 2) {
    const sum = i + j + k;

    [i, j, k] = [j, k, sum];

    n--;
  }

  return k;
};

export default solution;
