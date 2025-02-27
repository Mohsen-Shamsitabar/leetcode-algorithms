/**
 * *`O(N)`*.
 */
const solution = (a: string, b: string): string => {
  let result = "";

  let lengthA = a.length;
  const lengthB = b.length;

  const delta = Math.abs(lengthA - lengthB);

  if (lengthA > lengthB) {
    b = "0".repeat(delta) + b;
  } else if (lengthA < lengthB) {
    a = "0".repeat(delta) + a;
    lengthA += delta;
  }

  let remainder = 0;

  for (let i = lengthA - 1; i >= 0; i--) {
    const charA = a[i];
    const charB = b[i];

    const sumResult = Number(charA) + Number(charB) + remainder;

    remainder = 0;

    if (sumResult >= 2) remainder = 1;

    result = `${sumResult % 2}` + result;
  }

  if (remainder) result = `${remainder}` + result;

  return result;
};

export default solution;
