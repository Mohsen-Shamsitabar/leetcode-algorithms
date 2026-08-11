/**
 * Time = **`O(2^n)`**
 * Space = **`O(n)`**
 */
const _recursiveFibonacci = (n: number): number => {
  if (n === 1) return 0;
  if (n === 2) return 1;

  return _recursiveFibonacci(n - 1) + _recursiveFibonacci(n - 2);
};

/**
 * Time = **`O(n)`**
 * Space = **`O(n)`**
 */
const _memoizedFibonacci = (n: number) => {
  const fiboMap = new Map<number, number>([
    [1, 0],
    [2, 1]
  ]);

  const calculate = (k: number): number => {
    if (fiboMap.has(k)) return fiboMap.get(k)!;

    const first = calculate(k - 1);

    fiboMap.set(k - 1, first);

    const second = calculate(k - 2);

    fiboMap.set(k - 2, second);

    return first + second;
  };

  return calculate(n);
};

/**
 * Time = **`O(n)`**
 * Space = **`O(n)`**
 */
const tabulatedFibonacci = (n: number) => {
  const fiboSeq: number[] = [0, 1];

  if (n === 1) return fiboSeq[0];
  if (n === 2) return fiboSeq[1];

  let i = 2;

  while (i < n) {
    fiboSeq.push(fiboSeq[i - 1]! + fiboSeq[i - 2]!);
    i++;
  }

  return fiboSeq[n - 1];
};

export { tabulatedFibonacci as fibonacci };
