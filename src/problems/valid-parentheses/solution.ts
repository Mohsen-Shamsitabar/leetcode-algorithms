/**
 * *`Uses dict logic`*.
 */
// const validParentheses = (s: string): boolean => {
//   const parenthesesMap = {
//     "(": ")",
//     "{": "}",
//     "[": "]"
//   };

//   const opens = Object.keys(parenthesesMap);

//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i]!;

//     if (opens.includes(char)) {
//       stack.push(char);
//       continue;
//     }

//     if (stack.length === 0) return false;

//     const lastOppened = stack.pop()!;

//     if (char !== parenthesesMap[lastOppened as keyof typeof parenthesesMap]) {
//       return false;
//     }
//   }

//   if (stack.length !== 0) return false;

//   return true;
// };

/**
 * *`Uses hashmap logic`*.
 */
const validParentheses = (s: string): boolean => {
  const parenthesesMap: Map<string, string> = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"]
  ]);

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i]!;

    if (parenthesesMap.has(char)) {
      stack.push(char);
      continue;
    }

    if (stack.length === 0) return false;

    const lastOppened = stack.pop()!;

    if (char !== parenthesesMap.get(lastOppened)) {
      return false;
    }
  }

  if (stack.length !== 0) return false;

  return true;
};

export default validParentheses;
