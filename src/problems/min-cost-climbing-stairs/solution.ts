const _firstApproach = (cost: number[]): number => {
  const minCost = Array.from(cost);

  for (let i = cost.length - 3; i >= 0; i--) {
    minCost[i] = cost[i] + Math.min(minCost[i + 1], minCost[i + 2]);
  }

  // return minCost[0] >= minCost[1] ? minCost[1] : minCost[0];
  return Math.min(minCost[0], minCost[1]);
};

const minCostClimbingStairs = (cost: number[]): number => {
  const costlength = cost.length;
  let [a, b] = [cost[costlength - 2], cost[costlength - 1]];

  for (let i = costlength - 3; i >= 0; i--) {
    const temp = a;
    a = Math.min(cost[i] + a, cost[i] + b);
    b = temp;
  }

  return Math.min(a, b);
};

export default minCostClimbingStairs;
