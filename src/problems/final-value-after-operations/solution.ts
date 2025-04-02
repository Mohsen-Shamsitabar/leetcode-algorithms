type Operation = "--X" | "X--" | "++X" | "X++";

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (operations: Operation[]): number => {
  let result = 0;

  const increment = (n: number) => n + 1;

  const decrement = (n: number) => n - 1;

  const handleOperation = (n: number, operation: Operation) => {
    switch (operation) {
      case "--X":
        return decrement(n);

      case "X--":
        return decrement(n);

      case "++X":
        return increment(n);

      case "X++":
        return increment(n);

      default:
        return n;
    }
  };

  operations.forEach(operation => {
    result = handleOperation(result, operation);
  });

  return result;
};

export default solution;
