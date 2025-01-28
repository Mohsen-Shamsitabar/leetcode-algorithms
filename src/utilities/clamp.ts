const clamp = (minPoint: number, maxPoint: number, number: number) =>
  Math.min(maxPoint, Math.max(minPoint, number));

export default clamp;
