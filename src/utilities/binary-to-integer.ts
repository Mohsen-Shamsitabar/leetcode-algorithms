const binaryToInteger = (binaryNumber: string) => {
  let result = 0;
  const digitCount = binaryNumber.length;

  for (let i = digitCount - 1; i >= 0; i--) {
    const digit = binaryNumber[i];

    if (digit === "1") {
      result += 2 ** (digitCount - i - 1);
    }
  }

  return result;
};

export default binaryToInteger;
