/**
 * TIME = **`O(N^2)`**
 * SPACE = **`O(1)`**
 */
// const solution = (nums: number[]): void => {
//   // Use selection sort for constant space.

//   for (let i = 0; i < nums.length; i++) {
//     let lowest = i;

//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j]! < nums[lowest]!) {
//         lowest = j;
//       }
//     }

//     if (lowest !== i) {
//       const iNum = nums[i]!;

//       nums[i] = nums[lowest]!;
//       nums[lowest] = iNum;
//     }
//   }
// };

/**
 * TIME = **`O(N)`**
 * SPACE = **`O(1)`**
 */
const solution = (nums: number[]): void => {
  const count = [0, 0, 0];

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]!]!++;
  }

  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!count[j]) j++;

    nums[i] = j;
    count[j]!--;
  }
};

export default solution;
