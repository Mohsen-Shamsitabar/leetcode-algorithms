const integerToBinary = (integerNumber: number) => {
  let result = "";

  let x = integerNumber;

  while (x >= 2) {
    const remainder = x % 2;

    x = Math.floor(x / 2);
    result = `${remainder}` + result;
  }

  if (x) {
    result = `${x}` + result;
  }

  return result;
};

export default integerToBinary;
