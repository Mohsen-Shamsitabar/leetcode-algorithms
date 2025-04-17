/**
 * Time = **`O(n log n)`**
 * Space = **`O(1)`**
 */
// const solution = (seats: number[], students: number[]): number => {
//   let result = 0;

//   seats.sort((a, b) => a - b);
//   students.sort((a, b) => a - b);

//   for (let i = 0; i < seats.length; i++) {
//     const seat = seats[i]!;
//     const student = students[i]!;

//     result += Math.abs(seat - student);
//   }

//   return result;
// };

/**
 * Time = Space = **`O(n)`**
 */
const solution = (seats: number[], students: number[]): number => {
  // Find the maximum position in the arrays
  const maxPosition = Math.max(...seats, ...students);

  // Stores difference between number of seats and students at each position
  const differences: number[] = new Array<number>(maxPosition).fill(0);

  // Count the available seats at each position
  for (const position of seats) {
    differences[position - 1]! += 1;
  }

  // Remove a seat for each student at that position
  for (const position of students) {
    differences[position - 1]! -= 1;
  }

  // Calculate the number of moves needed to seat the students
  let moves = 0;
  let unmatched = 0;

  for (const difference of differences) {
    moves += Math.abs(unmatched);
    unmatched += difference;
  }

  return moves;
};

export default solution;
