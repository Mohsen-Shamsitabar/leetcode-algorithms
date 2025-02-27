// const longestCommonPrefix = (strs: string[]): string => {
//   let result = strs[0]!;

//   if (strs.length === 1) return result;

//   for (const str of strs) {
//     if (!str.length || !result.length) return "";

//     for (let i = 0; i < result.length; i++) {
//       if (i >= str.length) {
//         result = result.slice(0, i);
//         break;
//       }

//       const resultChar = result[i];
//       const strChar = str[i];

//       if (resultChar !== strChar) {
//         result = result.slice(0, i);
//       }
//     }
//   }

//   return result;
// };

const longestCommonPrefix = (strs: string[]): string => {
  const sorted = strs.sort((a, b) => (a < b ? -1 : 1));

  const output = [];
  const firstword = sorted[0]!;
  const lastword = sorted[sorted.length - 1]!;

  for (let i = 0; i < firstword.length; i++) {
    if (firstword[i] === lastword[i]) {
      output.push(firstword[i]);
    } else {
      break;
    }
  }

  return output.join("");
};

export default longestCommonPrefix;
