import { TreeNode } from "./node";
import { tree } from "./tree";

//insert a node in a binary search tree
function insertNode(
  key: number,
  value: any,
  node: TreeNode | null = tree
): TreeNode {
  let parent: TreeNode | null = null;
  if (node === null) {
    return new TreeNode(key, value, null, null, parent);
  }
  if (key < node.key) {
    parent = node.left;
    node.left = insertNode(key, value, node.left);
  } else {
    parent = node.right;
    node.right = insertNode(key, value, node.right);
  }
  return node;
}

if (require.main === module) {
  console.log(insertNode(3, tree));
}
