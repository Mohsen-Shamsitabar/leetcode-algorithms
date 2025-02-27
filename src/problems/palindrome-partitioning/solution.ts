/**
  Time Complexity: O(n * 2^n).
  Space Complexity: O(n^2).
 */
const solution = (s: string): string[][] => {
  const result: string[][] = [];
  const solution: string[] = [];

  const isPalindrome = (str: string): boolean => {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) return false;

      left++;
      right--;
    }

    return true;
  };

  const backtrack = (start: number): void => {
    if (start === s.length) {
      result.push([...solution]);
      return;
    }

    for (let end = start + 1; end <= s.length; end++) {
      const substr = s.substring(start, end);

      if (isPalindrome(substr)) {
        solution.push(substr);
        backtrack(end);
        solution.pop();
      }
    }
  };

  backtrack(0);
  return result;
};

export default solution;
