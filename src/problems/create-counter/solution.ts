const createCounter = (n: number): (() => number) => {
  return () => {
    return n++;
  };
};

export default createCounter;
