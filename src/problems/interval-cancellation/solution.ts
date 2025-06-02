type Fn = (...args: unknown[]) => void;

const solution = (fn: Fn, args: unknown[], t: number) => {
  fn(...args);
  const interval = setInterval(() => fn(...args), t);

  return () => clearInterval(interval);
};

export default solution;

// const fn = ((x: number) => x * 2) as Fn;

// const cancelFn = solution(fn, [4], 35);

// setTimeout(cancelFn, 190);
