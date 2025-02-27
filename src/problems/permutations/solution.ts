const permute = (nums: number[]): number[][] => {
  let result: number[][] = [[nums[0]!]];

  if (nums.length < 2) return result;

  const addElementInAllPossibleLocs = (array: number[], element: number) => {
    const newArray: number[][] = [];

    for (let i = 0; i <= array.length; i++) {
      if (i === array.length + 1) {
        newArray.push([...array, element]);
        break;
      }

      const left = array.slice(0, i);
      const right = array.slice(i);

      newArray.push([...left, element, ...right]);
    }

    return newArray;
  };

  for (let i = 1; i < nums.length; i++) {
    const iNum = nums[i]!;

    const newResult: number[][] = [];

    result.forEach(set =>
      newResult.push(...addElementInAllPossibleLocs(set, iNum))
    );

    result = newResult;
  }

  return result;
};

// Good approaches from solutions tab of leetcode. (NOT MY CODE >:])

// const permute = (nums: number[]): number[][] => {
//   const permuations: number[][] = [];

//   const chunks: number[] = [];

//   function backtrack(flags: number) {
//     if (chunks.length === nums.length) {
//       permuations.push([...chunks]);
//       return;
//     }

//     for (let i = 0; i < nums.length; i++) {
//       if ((flags >> i) & 1) continue;

//       chunks.push(nums[i]!);

//       backtrack(flags | (1 << i));

//       chunks.pop();
//     }
//   }

//   backtrack(0);

//   return permuations;
// };

// const permute = (nums: number[]): number[][] => {
//   function* permutationsOf(
//     nums: number[]
//   ): Generator<number[], undefined, unknown> {
//     const top = nums.pop();

//     if (top === undefined) {
//       yield [];
//       return;
//     }

//     for (const perm of permutationsOf(nums)) {
//       for (let i = 0; i <= perm.length; i++) {
//         const clone = [...perm];

//         clone.splice(i, 0, top);

//         yield clone;
//       }
//     }
//   }

//   return Array.from(permutationsOf(nums));
// };

export default permute;
