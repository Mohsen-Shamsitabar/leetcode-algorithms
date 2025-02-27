const singleNumber = (nums: number[]): number => {
  // cant figure out a way to make space constant...
  const numsSet = new Set<number>();

  for (const num of nums) {
    if (numsSet.has(num)) numsSet.delete(num);
    else numsSet.add(num);
  }

  return numsSet.values().next().value!;
};

// crazy shit

// const singleNumber = (nums: number[]): number => {
//   return nums.reduce((prev, val) => prev ^ val, 0);
// };

export default singleNumber;
