/**
 * Time = **`O(n^2)`**
 * Space = **`O(1)`**
 */
// const solution = (height: number[]): number => {
//   let i = 0;
//   let result = 0;
//   let areAllZeros = false;
//   const blockCount = height.length;

//   while (i < blockCount) {
//     if (height[i] === 0 || areAllZeros) {
//       i++;
//       areAllZeros = false;
//       continue;
//     }

//     height[i]!--;

//     let count = 0;

//     for (let j = i + 1; j < blockCount; j++) {
//       if (height[j] === 0) {
//         count++;
//       } else {
//         result += count;
//         count = 0;
//         height[j]!--;
//       }
//     }

//     if (count === blockCount - i + 1) areAllZeros = true;
//   }

//   return result;
// };

/**
 * Time = **`O(n^2)`**
 * Space = **`O(1)`**
 */
// const solution = (height: number[]): number => {
//   let result = 0;

//   let maxLeft = -1;
//   let maxRight = -1;

//   for (let i = 1; i < height.length - 1; i++) {
//     if (height[i] === maxRight) {
//       maxLeft = maxRight;
//       maxRight = -1;
//       continue;
//     }

//     if (maxLeft <= 0) {
//       for (let j = i - 1; j >= 0; j--) {
//         maxLeft = Math.max(maxLeft, height[j]!);
//       }
//     }

//     if (maxRight <= 0) {
//       for (let j = i + 1; j < height.length; j++) {
//         maxRight = Math.max(maxRight, height[j]!);
//       }
//     }

//     if (height[i]! > maxLeft) {
//       maxLeft = height[i]!;
//     }

//     const minValue = Math.min(maxLeft, maxRight);

//     const delta = minValue - height[i]!;

//     if (delta > 0) result += delta;
//   }

//   return result;
// };

// === === ===

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (height: number[]): number => {
  if (height.length === 0) return 0;

  let leftIdx = 0;
  let rightIdx = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;

  let totalWater = 0;

  while (leftIdx < rightIdx) {
    if (height[leftIdx]! < height[rightIdx]!) {
      if (height[leftIdx]! >= maxLeft) {
        maxLeft = height[leftIdx]!;
      } else {
        totalWater += maxLeft - height[leftIdx]!;
      }

      leftIdx++;
    } else {
      if (height[rightIdx]! >= maxRight) {
        maxRight = height[rightIdx]!;
      } else {
        totalWater += maxRight - height[rightIdx]!;
      }

      rightIdx--;
    }
  }

  return totalWater;
};

export default solution;
