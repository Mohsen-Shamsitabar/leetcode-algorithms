/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (date: string): string => {
  const [decimalYear, decimalMonth, decimalDay] = date.split("-") as [
    string,
    string,
    string
  ];

  const [binaryYear, binaryMonth, binaryDay] = [
    Number(decimalYear).toString(2),
    Number(decimalMonth).toString(2),
    Number(decimalDay).toString(2)
  ];

  // return `${binaryYear}-${binaryMonth}-${binaryDay}`;
  return [binaryYear, binaryMonth, binaryDay].join("-");
};

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
// const solution = (date: string): string => {
//   const [decimalYear, decimalMonth, decimalDay] = date.split("-") as [
//     string,
//     string,
//     string
//   ];

//   return [
//     Number(decimalYear).toString(2),
//     Number(decimalMonth).toString(2),
//     Number(decimalDay).toString(2)
//   ].join("-");
// };

export default solution;
