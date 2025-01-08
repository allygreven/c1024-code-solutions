import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns the values in the BST in numerical order, smallest to largest.
 */
export function traverse(bst: BinarySearchTree): number[] {
  return traverseRecursive(bst.root);
}

function traverseRecursive(node: TreeNode | undefined): number[] {
  if (node === undefined) {
    return [];
  }
  const values: number[] = [];

  values.push(...traverseRecursive(node.left));
  values.push(node.value);
  values.push(...traverseRecursive(node.right));
  return values;
}
