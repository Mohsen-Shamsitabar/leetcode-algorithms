/**
 * Time = Space = **`O(4^n)`**
 */
// const solution = (digits: string): string[] => {
//   const digitMap = new Map<string, string[]>([
//     ["2", ["a", "b", "c"]],
//     ["3", ["d", "e", "f"]],
//     ["4", ["g", "h", "i"]],
//     ["5", ["j", "k", "l"]],
//     ["6", ["m", "n", "o"]],
//     ["7", ["p", "q", "r", "s"]],
//     ["8", ["t", "u", "v"]],
//     ["9", ["w", "x", "y", "z"]]
//   ]);

//   let result: string[] = [];

//   for (const digit of digits) {
//     const letters = digitMap.get(digit)!;

//     if (result.length === 0) {
//       result = Array.from(letters);
//       continue;
//     }

//     const newResult: string[] = [];

//     for (const resultLetter of result) {
//       for (const digitLetter of letters) {
//         newResult.push(resultLetter.concat(digitLetter));
//       }
//     }

//     result = newResult;
//   }

//   return result;
// };

/**
 * Time = Space = **`O(4^n)`**
 */
// const solution = (digits: string): string[] => {
//   if (!digits) {
//     return [];
//   }

//   const phoneMap = new Map<string, string>([
//     ["2", "abc"],
//     ["3", "def"],
//     ["4", "ghi"],
//     ["5", "jkl"],
//     ["6", "mno"],
//     ["7", "pqrs"],
//     ["8", "tuv"],
//     ["9", "wxyz"]
//   ]);

//   const output: string[] = [];

//   const backtrack = (combination: string, nextDigits: string) => {
//     if (nextDigits.length === 0) {
//       output.push(combination);
//     } else {
//       const phoneMapLetters = phoneMap.get(nextDigits[0]!)!;

//       for (const letter of phoneMapLetters) {
//         backtrack(combination + letter, nextDigits.slice(1));
//       }
//     }
//   };

//   backtrack("", digits);
//   return output;
// };

/**
 * Time = Space = **`O(4^n)`**
 */
const solution = (digits: string): string[] => {
  const ans: string[] = [];

  if (digits.length === 0) return ans;

  const mapping: string[] = [
    "0",
    "1",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz"
  ];

  ans.push("");

  for (let i = 0; i < digits.length; i++) {
    const x = parseInt(digits.charAt(i));

    while (ans[0]!.length === i) {
      const t = ans.shift()!;

      for (const s of mapping[x]!) {
        ans.push(t + s);
      }
    }
  }

  return ans;
};

export default solution;
