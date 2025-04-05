const solution = (nums: number[], n: number) => {
  const firstSlice = nums.slice(0, n);
  const lastSlice = nums.slice(n, 2 * n);
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(firstSlice[i], lastSlice[i]);
  }

  return result;
};

export default solution;
