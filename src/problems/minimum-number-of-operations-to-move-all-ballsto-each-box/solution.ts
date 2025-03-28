/**
 * Time = **`O(n^2)`**
 * Space = **`O(n)`**
 */
// const solution = (boxes: string): number[] => {
//   const length = boxes.length;

//   if (length === 1) return [0];

//   const result = new Array<number>(length);

//   const handleRight = (currentIdx: number) => {
//     let answer = 0;
//     let counter = 0;

//     for (let i = currentIdx + 1; i < length; i++) {
//       const char = boxes[i]!;

//       counter++;

//       if (char === "1") answer += counter;
//     }

//     return answer;
//   };

//   const handleLeft = (currentIdx: number) => {
//     let answer = 0;
//     let counter = 0;

//     for (let i = currentIdx - 1; i >= 0; i--) {
//       const char = boxes[i]!;

//       counter++;

//       if (char === "1") answer += counter;
//     }

//     return answer;
//   };

//   for (let i = 0; i < length; i++) {
//     result[i] = handleLeft(i) + handleRight(i);
//   }

//   return result;
// };

/**
 * Time = Space = **`O(n)`**
 */
const solution = (boxes: string): number[] => {
  const n = boxes.length;
  const ans = new Array<number>(n).fill(0);

  let count = 0;

  for (let i = 1; i < n; i++) {
    if (boxes[i - 1]! === "1") {
      count++;
    }

    ans[i] = ans[i - 1]! + count;
  }

  for (let i = n - 2, count = 0, sum = 0; i >= 0; i--) {
    if (boxes[i + 1] === "1") {
      count++;
    }

    sum += count;
    ans[i]! += sum;
  }

  return ans;
};

export default solution;
