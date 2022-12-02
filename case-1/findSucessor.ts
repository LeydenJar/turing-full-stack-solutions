import { TreeNode } from "./node";
import { tree } from "./tree";

//Find the sucessor node of a given node
function findSucessor(node: TreeNode | null): TreeNode | null {
  if (node === null) {
    return null;
  }

  if (node.parent === null) {
    return null;
  }
  return node.parent;
}

if (require.main === module) {
  console.log(findSucessor(tree.right));
}
