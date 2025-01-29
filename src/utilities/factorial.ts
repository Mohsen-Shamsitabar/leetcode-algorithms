const factorial = (n: number): number =>
  n === 0 || n === 1
    ? 1
    : Array.from({ length: n }, (_, i) => i + 1).reduce(
        (acc, num) => acc * num,
        1
      );

export default factorial;
