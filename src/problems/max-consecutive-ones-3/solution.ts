/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
// const solution = (nums: number[], k: number): number => {
//   if (nums.length === 1) {
//     const firstNum = nums[0]!;

//     if (firstNum === 1) return 1;
//     if (k > 0) return 1;

//     return 0;
//   }

//   let result = 0;
//   let zeroCount = 0;

//   let [i, j] = [0, 0];

//   if (nums[i] === 0) zeroCount++;

//   while (j < nums.length - 1) {
//     const nextJValue = nums[j + 1]!;

//     const iValue = nums[i]!;

//     if (zeroCount < k) {
//       // move j
//       j++;

//       if (nextJValue === 0) {
//         zeroCount++;
//       }
//     } else {
//       if (nextJValue === 0) {
//         // move i;
//         i++;

//         if (iValue === 0) {
//           zeroCount--;
//         }
//       } else {
//         // move j
//         j++;
//       }
//     }

//     result = Math.max(result, j - i + 1);
//   }

//   while (zeroCount > k) {
//     result--;
//     zeroCount--;
//   }

//   return result;
// };

// def longestOnes(self, A, K):
// i = 0
// for j in xrange(len(A)):
//     K -= 1 - A[j]
//     if K < 0:
//         K += 1 - A[i]
//         i += 1
// return j - i + 1

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (nums: number[], k: number): number => {
  let i = 0;
  let j = 0;

  for (j = 0; j < nums.length; ++j) {
    k -= 1 - nums[j]!;

    if (k < 0) {
      k += 1 - nums[i]!;
      i++;
    }
  }

  return j - i;
};

export default solution;
