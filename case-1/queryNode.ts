import { TreeNode } from "./node";
import { tree } from "./tree";

//Search for a certain node in the tree based on its key
//(binary search tree)
export function queryNode(key: number, node: TreeNode | null): any {
  if (node === null) {
    return null;
  }
  if (key < node.key) {
    return queryNode(key, node.left);
  }
  if (key > node.key) {
    return queryNode(key, node.right);
  }
  return node.value;
}

if (require.main === module) {
  console.log(queryNode(3, tree));
}
