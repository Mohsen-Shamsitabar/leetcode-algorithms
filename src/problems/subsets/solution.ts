// const solution = (nums: number[]): number[][] => {
//   const result: number[][] = [[]];

//   for (const num of nums) result.push([num]);

//   const getSubsets = (lengthCount: number) => {
//     const tempSubset: number[][] = [];

//     for (let i = 0; i < nums.length; i++) {
//       if (i > nums.length - lengthCount) break;

//       const iNum = nums[i]!;

//       let j = i + 1;
//       let endPos = 0;
//       let iSubsets: number[] = [iNum];

//       while (endPos !== nums.length - 1) {
//         if (i === j) {
//           j = (j + 1) % nums.length;
//           continue;
//         }

//         const jNum = nums[j]!;

//         iSubsets.push(jNum);

//         if (iSubsets.length === lengthCount) {
//           endPos = j;
//           tempSubset.push(iSubsets);
//           iSubsets = [iNum];
//         }

//         j = (j + 1) % nums.length;
//       }
//     }

//     return tempSubset;
//   };

//   for (let lengthCount = 2; lengthCount <= nums.length; lengthCount++) {
//     result.push(...getSubsets(lengthCount));
//   }

//   return result;
// };

// const setUnion = (
//   originalSet: Set<unknown>,
//   otherSet: Set<unknown>,
//   turnToArray: boolean = false
// ) => {
//   if (turnToArray) {
//     const newValue: unknown[] = [];

//     otherSet.forEach(value => {
//       newValue.push(value);
//     });

//     originalSet.add(newValue);

//     return;
//   }

//   otherSet.forEach(value => {
//     originalSet.add(value);
//   });
// };

// const solution = (nums: number[]): number[][] => {
//   const result: Set<number[]> = new Set([[]]);
//   // const result: number[][] = [[]];

//   for (const num of nums) result.add([num]);

//   const getSubsets = (lengthCount: number) => {
//     // const tempSubset: number[][] = [];
//     const tempSubset: Set<number[]> = new Set();

//     for (let i = 0; i < nums.length; i++) {
//       if (i > nums.length - lengthCount) break;

//       const iNum = nums[i]!;

//       let j = i + 1;
//       let endPos = 0;
//       const iSubsets: Set<number> = new Set([iNum]);

//       while (endPos !== nums.length - 1) {
//         if (i === j) {
//           j = (j + 1) % nums.length;
//           continue;
//         }

//         const jNum = nums[j]!;

//         iSubsets.add(jNum);

//         if (iSubsets.size === lengthCount) {
//           endPos = j;
//           setUnion(tempSubset, iSubsets, true);

//           // tempSubset.add(iSubsets);
//           iSubsets.clear();
//           iSubsets.add(iNum);
//         }

//         j = (j + 1) % nums.length;
//       }
//     }

//     return tempSubset;
//   };

//   for (let lengthCount = 2; lengthCount <= nums.length; lengthCount++) {
//     setUnion(result, getSubsets(lengthCount));
//   }

//   return Array.from(result);
// };

/**
 * this shit was crazzyyyyy...
 *   ||
 *   ||
 *   \/
 */
//
const solution = (nums: number[]): number[][] => {
  const sets: number[][] = [[]];

  for (const num of nums) {
    const tempSet = sets.map(set => {
      return [...set, num];
    });

    sets.push(...tempSet);
  }

  return sets;
};

export default solution;
