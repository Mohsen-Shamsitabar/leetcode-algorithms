/**
 * SPACE = TIME = **`O(N)`**
 */
// const solution = (nums: number[]): number => {
//   const seqArr = [];
//   let result = 0;

//   let sumAmount = 0;

//   for (const num of nums) {
//     if (num === 0) {
//       if (sumAmount) seqArr.push(sumAmount);
//       seqArr.push(num);

//       sumAmount = 0;
//       continue;
//     }

//     sumAmount++;
//   }

//   if (sumAmount) seqArr.push(sumAmount);

//   // === === === //

//   if (seqArr.length === 1) return seqArr[0] === 0 ? 0 : seqArr[0]! - 1;

//   for (let i = 0; i < seqArr.length; i++) {
//     const center = seqArr[i];

//     if (center !== 0) continue;

//     const left = seqArr[i - 1];
//     const right = seqArr[i + 1];

//     result = Math.max(result, (left ?? 0) + (right ?? 0));
//   }

//   return result;
// };

/**
 * SPACE = **`O(1)`**
 * TIME = **`O(N)`**
 */
const solution = (nums: number[]): number => {
  let maxLength = 0;
  let count = 0;
  let onesBefore = 0;

  for (const num of nums) {
    if (num) {
      count++;
      maxLength = Math.max(maxLength, count + onesBefore);
      continue;
    }

    onesBefore = count;
    count = 0;
  }

  return Math.min(maxLength, nums.length - 1);
};

export default solution;
