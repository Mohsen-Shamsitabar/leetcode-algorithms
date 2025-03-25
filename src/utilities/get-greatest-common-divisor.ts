const getGCD = (a: number, b: number): number => {
  a = Math.abs(a);
  b = Math.abs(b);

  if (b > a) [a, b] = [b, a];

  while (true) {
    if (b === 0) return a;
    a %= b;

    if (a === 0) return b;
    b %= a;
  }
};

export default getGCD;
