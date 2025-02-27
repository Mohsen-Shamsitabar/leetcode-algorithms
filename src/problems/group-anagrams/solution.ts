/**
 * TIME: `O(n * m^2)`.
 * SPACE: `O(n + m)`.
 * **Optimal way!**
 */
// const groupAnagrams = (strs: string[]): string[][] => {
//   const result: string[][] = [];

//   while (strs.length > 0) {
//     const word = strs.pop()!;
//     const anagrams = [word];
//     const charCount = new Map<string, number>();

//     for (const char of word) {
//       const charVal = charCount.get(char) ?? 0;

//       charCount.set(char, charVal + 1);
//     }

//     let i = 0;

//     checkStr: while (i < strs.length) {
//       const str = strs[i]!;

//       if (str.length !== word.length) {
//         i++;
//         continue;
//       }

//       const map = new Map(charCount);

//       for (const char of str) {
//         if (!map.has(char)) {
//           i++;
//           continue checkStr;
//         }

//         const charVal = map.get(char)!;

//         if (charVal - 1 === 0) {
//           map.delete(char);
//           continue;
//         }

//         map.set(char, charVal - 1);
//       }

//       if (map.size) {
//         i++;
//         continue;
//       }

//       strs.splice(i, 1);
//       anagrams.push(str);
//     }

//     result.push(anagrams);
//   }

//   return result;
// };

/**
 * TIME: `O(n^2 * m log m)`.
 * SPACE: `O(n * m)`.
 * **Worst way!**
 */
// const groupAnagrams = (strs: string[]): string[][] => {
//   const result: string[][] = [];

//   while (strs.length > 0) {
//     const word = strs.pop()!;
//     const anagrams = [word];
//     const sortedWord = word.split("").sort().join("");

//     let i = 0;

//     while (i < strs.length) {
//       const str = strs[i]!;
//       const sortedStr = str.split("").sort().join("");

//       if (sortedStr.length !== sortedWord.length) {
//         i++;
//         continue;
//       }

//       if (sortedStr !== sortedWord) {
//         i++;
//         continue;
//       }

//       strs.splice(i, 1);
//       anagrams.push(str);
//     }

//     result.push(anagrams);
//   }

//   return result;
// };

// ---

/**
 * TIME: `O(n * m)`.
 * SPACE: `O(n)`.
 * **Best way!**
 */
const groupAnagrams = (strs: string[]): string[][] => {
  const map = new Map<string, string[]>();

  for (const s of strs) {
    // Create frequency array for current string
    const charFreq = Array.from({ length: 26 }, () => 0);

    // Count frequency of each character
    for (let i = 0; i < s.length; i++) {
      const ascii = s.charCodeAt(i);
      const idx = ascii - 97;

      charFreq[idx]!++;
    }

    // Convert frequency array to string key
    const keyStr = charFreq.toString();

    // Initialize new group if needed
    if (!map.has(keyStr)) {
      map.set(keyStr, []);
    }

    // Add string to its corresponding group
    map.get(keyStr)!.push(s);
  }

  return Array.from(map.values());
};

export default groupAnagrams;
