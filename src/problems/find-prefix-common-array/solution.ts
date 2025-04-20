/**
 * Time = Space = **`O(n)`**
 */
// const solution = (A: number[], B: number[]): number[] => {
//   const n = A.length;

//   const result: number[] = [];
//   const visited = new Set();

//   let count = 0;

//   for (let i = 0; i < n; i++) {
//     const aNum = A[i]!;
//     const bNum = B[i]!;

//     if (!visited.has(aNum)) {
//       visited.add(aNum);
//     } else {
//       count++;
//     }

//     if (!visited.has(bNum)) {
//       visited.add(bNum);
//     } else {
//       count++;
//     }

//     result[i] = count;
//   }

//   return result;
// };

// === === === === === === ===

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (A: number[], B: number[]): number[] => {
  const n = A.length;
  const ans: number[] = [];
  let bitmask = 0;
  let common = 0;

  for (let i = 0; i < n; i++) {
    const a_bit = 1 << (A[i]! - 1);
    const b_bit = 1 << (B[i]! - 1);

    if ((bitmask & a_bit) === 0) {
      bitmask |= a_bit;
    } else {
      common += 1;
    }

    if ((bitmask & b_bit) === 0) {
      bitmask |= b_bit;
    } else {
      common += 1;
    }

    ans.push(common);
  }

  return ans;
};

export default solution;
