/**
 * Time = Space = **`O(N)`**
 */
// const solution = (nums: number[]): number => {
//   const numCount = new Map<number, number>();

//   for (const num of nums) {
//     const count = numCount.get(num) ?? 0;

//     if (count + 1 > nums.length / 2) return num;

//     numCount.set(num, count + 1);
//   }

//   return -1;
// };

// === === ===

/**
 * Time = **`O(N^2)`**
 * Space = **`O(1)`**
 */
// const solution = (nums: number[]): number => {
//   insertionSort(nums);

//   return nums[Math.floor(nums.length / 2)]!;
// };

// === === ===

/**
 * Time = **`O(n logn)`**
 * Space = **`O(1)`**
 */
// const solution = (nums: number[]): number => {
//   shellSort(nums);

//   return nums[Math.floor(nums.length / 2)]!;
// };

// === === === === === === //

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (nums: number[]): number => {
  let candidate = 0;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
};

export default solution;
