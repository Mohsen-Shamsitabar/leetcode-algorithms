/**
 * Time = **`O(q * p)`**
 * Space = **`O(q)`**
 */
const solution = (
  points: [number, number][],
  queries: [number, number, number][]
): number[] => {
  const answer = new Array<number>(queries.length);

  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  };

  queries.forEach((circle, idx) => {
    const [cX, cY, cR] = circle;

    let count = 0;

    points.forEach(point => {
      const [pX, pY] = point;

      if (getDistance(pX, pY, cX, cY) <= cR) count++;
    });

    answer[idx] = count;
  });

  return answer;
};

export default solution;
