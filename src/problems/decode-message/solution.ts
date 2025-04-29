/**
 * Time = **`O(n + m)`**
 * Space = **`O(m)`**
 */
const solution = (key: string, message: string): string => {
  const lang = new Map<string, string>();

  let i = 0;

  for (const char of key) {
    if (char === " ") continue;
    if (lang.has(char)) continue;

    lang.set(char, String.fromCharCode(i + 97));
    i++;
  }

  let result = "";

  for (const char of message) {
    if (lang.has(char)) {
      result += lang.get(char)!;
    } else {
      result += char;
    }
  }

  return result;
};

export default solution;
