const generateParenthesis = (n: number): string[] => {
  const result: string[] = [];

  const build = (openCount: number, closeCount: number, str: string) => {
    if (openCount === n) {
      const delta = openCount - closeCount;
      const newStr = str.concat(")".repeat(delta));
      result.push(newStr);
      return;
    }

    build(openCount + 1, closeCount, str.concat("("));

    if (openCount > closeCount) {
      build(openCount, closeCount + 1, str.concat(")"));
    }
  };

  build(1, 0, "(");

  return result;
};

export default generateParenthesis;
