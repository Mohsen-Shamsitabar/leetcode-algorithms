/**
 * Wrong answer, it has duplicate values, like [3,5] and [5,3].
 * If i remove these values, it works.
 */
const _myApproach = (candidates: number[], target: number): number[][] => {
  const nums = new Set<number>(candidates);
  const result: number[][] = [];

  const findCombo = (t: number, n: number, combo: number[]) => {
    const delta = t - n;

    if (delta < 0) return;

    const newCombo = [...combo, n];

    if (delta === 0) {
      result.push(newCombo);
      return;
    }

    if (nums.has(delta) && delta !== n) {
      findCombo(delta, delta, newCombo);
    }

    findCombo(delta, n, newCombo);
  };

  candidates.forEach(num => findCombo(target, num, []));

  return result;
};

// === === ===

const combinationSum = (candidates: number[], target: number): number[][] => {
  const result: number[][] = [];

  const backtrack = (start: number, t: number, combination: number[]) => {
    if (t < 0) return;

    if (t === 0) {
      result.push([...combination]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const n = candidates[i];

      const delta = t - n;

      combination.push(n);
      backtrack(i, delta, combination);
      combination.pop();
    }
  };

  backtrack(0, target, []);
  return result;
};

export default combinationSum;
