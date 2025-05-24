export type Fn<Args extends unknown[] = unknown[], Return = unknown> = (
  ...args: Args
) => Return;

const solution = <Args extends unknown[], Return>(
  fn: Fn<Args, Return>
): Fn<Args, Return | undefined> => {
  let isCalled = false;

  return (...args: Args): Return | undefined => {
    if (isCalled) return undefined;

    isCalled = true;
    return fn(...args);
  };
};

export default solution;
