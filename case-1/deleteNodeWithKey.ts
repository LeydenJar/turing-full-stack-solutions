import { TreeNode } from "./node";
import { queryNode } from "./queryNode";
import { tree } from "./tree";

//Deletes all nodes with a certain key, given as input a key
function deleteNodeWithKey(
  key: number,
  node: TreeNode | null
): TreeNode | null {
  const firstInstanceFoundOfNode = queryNode(key, node);
  if (firstInstanceFoundOfNode.parent.left.key == key) {
    delete firstInstanceFoundOfNode.parent.left;
  } else {
    delete firstInstanceFoundOfNode.parent.right;
  }
  return node;
}

if (require.main === module) {
  console.log(deleteNodeWithKey(3, tree));
}
