/**
 * Time = **`O(2^(m+n))`**
 * Space = **`O(m+n)`**
 * @description
 * **Time Limit Exeeded!**
 */
// const solution = (m: number, n: number): number => {
//   let result = 0;

//   const stack: [number, number] = [[1, 1]];

//   while (stack.length > 0) {
//     const [i, j] = stack.pop()!;

//     if (i === m && j === n) {
//       result++;
//       continue;
//     }

//     if (i + 1 <= m) {
//       stack.push([i + 1, j]);
//     }

//     if (j + 1 <= n) {
//       stack.push([i, j + 1]);
//     }
//   }

//   return result;
// };

/**
 * Time = Space = **`O(m * n)`**
 */
// const solution = (m: number, n: number): number => {
//   const dp = new Array(m).fill(new Array(n).fill(0)) as number[][];

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i - 1 < 0 || j - 1 < 0) {
//         dp[i]![j] = 1;
//         continue;
//       }

//       // ===

//       dp[i]![j] = dp[i - 1]![j]! + dp[i]![j - 1]!;
//     }
//   }

//   return dp[m - 1]![n - 1]!;
// };

/**
 * Time = **`O(m * n)`**
 * Space = **`O(n)`**
 * @description
 * We could also store both the prev row and the prev col.
 * the Time complexity would still be linear but technically it would be `O(2n)`
 */
const solution = (m: number, n: number): number => {
  const rowTemp = new Array<number>(n).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      rowTemp[j] = rowTemp[j]! + rowTemp[j - 1]!;
    }
  }

  return rowTemp[n - 1]!;
};

export default solution;
