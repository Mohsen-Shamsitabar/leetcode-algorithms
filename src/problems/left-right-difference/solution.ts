/**
 * Time = Space = **`O(n)`**
 */
// const solution = (nums: number[]): number[] => {
//   const length = nums.length;
//   const leftSum: number[] = new Array<number>(length);
//   const rightSum: number[] = new Array<number>(length);

//   let sum = 0;

//   for (let i = 0; i < length; i++) {
//     const num = nums[i]!;

//     leftSum[i] = sum;

//     sum += num;
//   }

//   sum = 0;

//   for (let i = length - 1; i >= 0; i--) {
//     const num = nums[i]!;

//     rightSum[i] = sum;

//     sum += num;
//   }

//   return leftSum.map((num, idx) => {
//     return Math.abs(num - rightSum[idx]!);
//   });
// };

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (nums: number[]): number[] => {
  const n = nums.length;

  let [leftSum, rightSum] = [0, 0];

  for (const num of nums) rightSum += num;

  for (let i = 0; i < n; i++) {
    const val = nums[i]!;

    rightSum -= val;
    nums[i] = Math.abs(rightSum - leftSum);
    leftSum += val;
  }

  return nums;
};

export default solution;
