import type { TreeNode } from "../../types.ts";

/**
 * Time = **`O(n^2)`**
 * Space = **`O(n)`**
 */
// const solution = (nums: number[]): TreeNode | null => {
//   const findMaxWithIdx = (nums: number[]): [number, number] => {
//     let [maxNum, idx] = [nums[0]!, 0];

//     nums.forEach((num, i) => {
//       if (num <= maxNum) return;

//       maxNum = num;
//       idx = i;
//     });

//     return [maxNum, idx];
//   };

//   const createNode = (numbers: number[]) => {
//     if (numbers.length === 0) return null;

//     const [maxNum, idx] = findMaxWithIdx(numbers);
//     const leftArr = numbers.slice(0, idx);
//     const rightArr = numbers.slice(idx + 1, numbers.length);

//     const root: TreeNode = {
//       val: maxNum,
//       left: createNode(leftArr),
//       right: createNode(rightArr)
//     };

//     return root;
//   };

//   return createNode(nums);
// };

/**
 * Time = **`O(n)`**
 * Space = **`O(n)`**
 */
const solution = (nums: number[]): TreeNode | null => {
  const stack: TreeNode[] = [];

  for (let i = 0; i < nums.length; ++i) {
    const cur: TreeNode = {
      val: nums[i]!,
      left: null,
      right: null
    };

    while (stack.length > 0 && stack[stack.length - 1]!.val < nums[i]!) {
      cur.left = stack.pop()!;
    }

    if (stack.length > 0) {
      stack[stack.length - 1]!.right = cur;
    }

    stack.push(cur);
  }

  return stack[0] || null;
};

export default solution;
