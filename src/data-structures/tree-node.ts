class TreeNode {
  public val: number = 0;
  public left: TreeNode | null = null;
  public right: TreeNode | null = null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    if (val !== undefined) this.val = val;
    if (left !== undefined) this.left = left;
    if (right !== undefined) this.right = right;
  }
}

export { TreeNode };
