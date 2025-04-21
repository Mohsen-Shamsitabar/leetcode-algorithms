/**
 * Space = Time = **`O(n)`**
 */
// const solution = (start: number, goal: number): number => {
//   let result = 0;

//   let startBinary = start.toString(2);
//   let goalBinary = goal.toString(2);

//   const delta = Math.abs(startBinary.length - goalBinary.length);

//   if (startBinary.length > goalBinary.length) {
//     goalBinary = "0".repeat(delta) + goalBinary;
//   } else if (goalBinary.length > startBinary.length) {
//     startBinary = "0".repeat(delta) + startBinary;
//   }

//   for (let i = 0; i < startBinary.length; i++) {
//     if (startBinary[i] !== goalBinary[i]) {
//       result++;
//     }
//   }

//   return result;
// };

// === === === === === === ===

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (start: number, goal: number): number => {
  // XOR to find differing bits between start and goal
  let xorResult = start ^ goal;
  let ans = 0;

  // Count the number of 1's in the XOR result
  while (xorResult > 0) {
    ans += xorResult & 1;
    xorResult >>= 1;
  }

  return ans;
};

export default solution;
