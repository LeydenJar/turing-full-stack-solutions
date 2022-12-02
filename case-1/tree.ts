import { TreeNode } from "./node";

export const tree = new TreeNode(5, "root", null, null, null);

tree.left = new TreeNode(3, "l", null, null, tree);
tree.right = new TreeNode(8, "r", null, null, tree);
tree.right.left = new TreeNode(7, "r.l", null, null, null);
tree.right.right = new TreeNode(9, "r.r", null, null, null);
