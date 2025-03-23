const solution = (nums: number[]): number[] => [...nums, ...nums];

// const solution = (nums: number[]): number[] => {
//   const length = nums.length;

//   const answer = new Array<number>(length * 2);

//   nums.forEach((num, idx) => {
//     answer[idx] = num;
//     answer[idx + length] = num;
//   });

//   return answer;
// };

export default solution;
