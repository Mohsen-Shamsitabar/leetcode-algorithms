const solution = (n: number): (() => number) => {
  return () => {
    return n++;
  };
};

export default solution;
