/**
 * Time = Space = **`O(n)`**
 */
const solution = (command: string): string => {
  let result = "";
  let i = 0;

  while (i < command.length) {
    if (command[i] === "G") {
      result += "G";
      i++;
      continue;
    }

    if (command[i] === "(" && command[i + 1] === ")") {
      result += "o";
      i += 2;
      continue;
    }

    result += "al";
    i += 4;
    continue;
  }

  return result;
};

export default solution;
