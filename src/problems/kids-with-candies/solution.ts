/**
 * Time = Space = **`O(n)`**
 */
// const solution = (candies: number[], extraCandies: number): boolean[] => {
//   const result: boolean[] = [];

//   const maxCandies = Math.max(...candies);

//   candies.forEach(candy => {
//     if (candy + extraCandies >= maxCandies) result.push(true);
//     else result.push(false);
//   });

//   return result;
// };

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (
  candies: number[] | boolean[],
  extraCandies: number
): boolean[] => {
  const maxCandies = Math.max(...(candies as number[]));

  for (let i = 0; i < candies.length; i++) {
    candies[i] =
      (candies[i] as number) + extraCandies >= maxCandies ? true : false;
  }

  return candies as boolean[];
};

export default solution;
