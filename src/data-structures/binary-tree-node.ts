class BinaryTreeNode<T> {
  public value: T;
  public left?: BinaryTreeNode<T>;
  public right?: BinaryTreeNode<T>;

  constructor({
    left,
    value,
    right
  }: {
    value: T;
    left?: BinaryTreeNode<T>["left"];
    right?: BinaryTreeNode<T>["right"];
  }) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export default BinaryTreeNode;
