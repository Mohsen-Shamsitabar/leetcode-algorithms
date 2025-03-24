// const solution = (n: number): number => {
//   const num = `${n}`;

//   const reverseString = (str: string) => {
//     let reversed = "";

//     for (let i = 0; i < str.length; i++) {
//       reversed = str[i]! + reversed;
//     }

//     return reversed;
//   };

//   let [pivotNumber, idx] = ["", 0];

//   for (let i = num.length - 2; i >= 0; i--) {
//     const curr = num[i]!;
//     const prev = num[i + 1]!;

//     if (curr < prev) {
//       pivotNumber = curr;
//       idx = i;
//       break;
//     }
//   }

//   const A = num.slice(0, idx);
//   const B = num.slice(idx).split("");

//   for (let i = B.length - 1; i > 0; i--) {
//     const curr = B[i]!;

//     if (curr > pivotNumber) {
//       [B[0], B[i]] = [B[i]!, B[0]!];
//       pivotNumber = curr;
//       break;
//     }
//   }

//   const stringToReverse = B.splice(1);

//   const reversedString = reverseString(stringToReverse.join(""));

//   const answer = Number(A.concat(pivotNumber).concat(reversedString));

//   if (answer <= n) return -1;

//   if (answer > Math.pow(2, 31) - 1) return -1;

//   return answer;
// };

const solution = (num: number): number => {
  if (num <= 1) return -1;

  const numStringArray: string[] = num.toString().split(""); // to facilitate swap in future
  const n: number = numStringArray.length;

  let i: number = n - 1;
  let pivot: number = n - 1;

  // since we are checking [i - 1], so [0 - 1] will go out of bounds
  while (i > 0 && Number(numStringArray[i - 1]) >= Number(numStringArray[i]))
    i--;

  if (i <= 0) return -1; // means nowhere we encountered a decreasing trend

  // for i, we are checking (i - 1), so (i - 1) should be pivot
  pivot = i - 1;

  // iterate from (n - 1) -- pivot to get smallest number greater than pivot and swap them
  for (let j = n - 1; j >= pivot; j--) {
    if (numStringArray[j]! > numStringArray[pivot]!) {
      [numStringArray[j], numStringArray[pivot]] = [
        numStringArray[pivot]!,
        numStringArray[j]!
      ];
      break;
    }
  }

  // reverse string right of pivot, using two pointers to reverse in O(1) space
  let left: number = pivot + 1;
  let right: number = n - 1;

  while (left < right) {
    [numStringArray[left], numStringArray[right]] = [
      numStringArray[right]!,
      numStringArray[left]!
    ];
    left++;
    right--;
  }

  const reversedNum: number = Number(numStringArray.join(""));

  return reversedNum > 2147483647 ? -1 : reversedNum;
};

export default solution;
