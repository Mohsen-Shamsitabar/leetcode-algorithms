/**
 * *`O(N)`*.
 */
const _rotateArray = (nums: number[], k: number): void => {
  const length = nums.length;

  const newNums = new Array(length) as number[];

  nums.forEach((num, idx) => {
    const newIdx = (idx + k) % length;
    newNums[newIdx] = num;
  });

  newNums.forEach((num, idx) => {
    nums[idx] = num;
  });
};

// ===

const swap = (nums: number[], head: number, tail: number) => {
  while (head < tail) {
    const temp = nums[head];
    nums[head] = nums[tail];
    nums[tail] = temp;
    head++;
    tail--;
  }
};

const secondApprouch = (nums: number[], k: number) => {
  const N = nums.length;
  const K = k % N;
  const B = N - K - 1;

  swap(nums, 0, B);
  swap(nums, B + 1, N - 1);
  swap(nums, 0, N - 1);
};

export default secondApprouch;
