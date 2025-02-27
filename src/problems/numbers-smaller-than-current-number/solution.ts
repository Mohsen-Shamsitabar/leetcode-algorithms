// const solution = (nums: number[]): number[] => {
//   const result: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//     const curr = nums[i]!;

//     let count = 0;

//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) continue;

//       const next = nums[j]!;

//       if (next < curr) count++;
//     }

//     result.push(count);
//   }

//   return result;
// };

const solution = (nums: number[]): number[] => {
  const result: number[] = [];
  const sorted: number[] = [...nums].sort((a, b) => a - b);
  const countMap = new Map<number, number>();

  for (let i = 0; i < sorted.length; i++) {
    if (!countMap.has(sorted[i]!)) {
      countMap.set(sorted[i]!, i);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    result.push(countMap.get(nums[i]!)!);
  }

  return result;
};

export default solution;
