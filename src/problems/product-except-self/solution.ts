const productExceptSelf = (nums: number[]): number[] => {
  const numsLength = nums.length;

  const result = new Array<number>(numsLength).fill(1);

  let product = 1;

  for (let i = 0; i < numsLength; i++) {
    result[i]! *= product;
    product *= nums[i]!;
  }

  product = 1;

  for (let i = numsLength - 1; i >= 0; i--) {
    result[i]! *= product;
    product *= nums[i]!;
  }

  return result;
};

export default productExceptSelf;
