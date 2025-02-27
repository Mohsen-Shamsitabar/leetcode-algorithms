const differenceOfSums = (n: number, m: number): number => {
  let divisibleSum = 0;
  let nonDivisibleSum = 0;

  for (let num = 1; num <= n; num++) {
    if (num % m !== 0) nonDivisibleSum += num;
    else divisibleSum += num;
  }

  return nonDivisibleSum - divisibleSum;
};

export default differenceOfSums;
