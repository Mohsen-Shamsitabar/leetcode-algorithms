/**
 * Time = **`O(n^2)`**
 * Space = **`O(1)`**
 */
// const solution = (nums: number[]): void => {
//   let i = 0;
//   let j = nums.length;

//   while (i < j) {
//     const num = nums[i]!;

//     if (num === 0) {
//       nums.splice(i, 1);
//       nums.push(0);
//       j--;
//       continue;
//     }

//     i++;
//   }
// };

/**
 * Time = **`O(n^2)`**
 * Space = **`O(1)`**
 */
// const solution = (nums: number[]): void => {
//   for (let i = 0; i < nums.length - 1; i++) {
//     const iNum = nums[i]!;

//     if (iNum !== 0) continue;

//     for (let j = i + 1; j < nums.length; j++) {
//       const jNum = nums[j]!;

//       if (jNum === 0) continue;

//       const temp = iNum;

//       nums[i] = jNum;
//       nums[j] = temp;
//       break;
//     }
//   }
// };

/**
 * Time = **`O(n)`**
 * Space = **`O(k)`**
 */
// const solution = (nums: number[]): void => {
//   const zeroPositions: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i]!;

//     if (num === 0) {
//       zeroPositions.push(i);
//       continue;
//     }

//     if (zeroPositions.length === 0) continue;

//     const zeroIdx = zeroPositions.shift()!;

//     zeroPositions.push(i);

//     nums[zeroIdx] = num;
//     nums[i] = 0;
//   }
// };

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (nums: number[]): void => {
  let zeroPos = -1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;

    if (num !== 0) {
      if (zeroPos < 0) continue;

      nums[zeroPos] = num;
      nums[i] = 0;
      zeroPos++;
    }

    if (zeroPos < 0) {
      zeroPos = i;
    }
  }
};

export default solution;
