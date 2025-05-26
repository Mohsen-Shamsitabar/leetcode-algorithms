type Fn = (...params: unknown[]) => Promise<unknown>;

const solution = (fn: Fn, t: number): Fn => {
  return async (...args) => {
    const fnPromise = fn(...args);

    return Promise.race([
      fnPromise.then(v => v),
      new Promise(resolve => {
        setTimeout(() => {
          resolve(undefined);
        }, t);
      }).then(v => v)
    ]);
  };
};

export default solution;
