/**
 * *`O(N)`*.
 */
const romanToInteger = (s: string): number => {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;
  let i = 0;

  while (i <= s.length - 1) {
    const iNum = romanMap[s[i] as keyof typeof romanMap];

    if (i === s.length - 1) {
      result += iNum;
      break;
    }

    const j = i + 1;
    const jNum = romanMap[s[j] as keyof typeof romanMap];

    if (iNum >= jNum) {
      result += iNum;
      i++;
      continue;
    }

    result += jNum - iNum;
    i += 2;
  }

  return result;
};

export default romanToInteger;
