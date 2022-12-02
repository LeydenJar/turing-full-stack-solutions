export class TreeNode {
  constructor(key, value, left, right, parent) {
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }

  key: number;
  value: any;
  left: TreeNode | null;
  right: TreeNode | null;
  parent: TreeNode | null;
}
