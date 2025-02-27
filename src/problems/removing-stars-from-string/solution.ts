const solution = (s: string): string => {
  const stack: string[] = [];

  for (const char of s) {
    if (char === "*") {
      stack.pop();
      continue;
    }

    stack.push(char);
  }

  return stack.join("");
};

export default solution;
