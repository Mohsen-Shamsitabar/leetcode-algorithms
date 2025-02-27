/**
 * TIME = **`O(N^2)`**
 * SPACE = **`O(N)`**
 */
const findCircleNum = (isConnected: number[][]): number => {
  const dfs = (node: number, isConnected: number[][], visit: boolean[]) => {
    visit[node] = true;

    for (let i = 0; i < isConnected.length; i++) {
      if (isConnected[node]![i] && !visit[i]) {
        dfs(i, isConnected, visit);
      }
    }

    return;
  };

  let result = 0;

  const cityCount = isConnected.length;
  const visit = new Array<boolean>(cityCount).fill(false);

  for (let i = 0; i < cityCount; i++) {
    if (visit[i]) continue;

    result++;
    dfs(i, isConnected, visit);
  }

  return result;
};

export default findCircleNum;
