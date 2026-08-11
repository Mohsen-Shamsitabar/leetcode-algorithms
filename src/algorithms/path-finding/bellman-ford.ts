// https://www.geeksforgeeks.org/dsa/bellman-ford-algorithm-dp-23/

const bellmanFord = (
  vertices: number[],
  edges: [number, number, number][],
  source: number
) => {
  // Step 1: Initialize distances
  const dist: number[] = [];

  vertices.forEach(v => (dist[v] = Infinity));
  dist[source] = 0;

  // Step 2: Relax edges V - 1 times
  for (let i = 0; i < vertices.length - 1; i++) {
    edges.forEach(([u, v, w]) => {
      if (dist[u] !== Infinity && dist[u]! + w < dist[v]!) {
        dist[v] = dist[u]! + w;
      }
    });
  }

  // Step 3: Detect negative cycles
  edges.forEach(([u, v, w]) => {
    if (dist[u] !== Infinity && dist[u]! + w < dist[v]!) {
      throw new Error("Graph contains a negative weight cycle");
    }
  });

  return dist;
};

export { bellmanFord };
