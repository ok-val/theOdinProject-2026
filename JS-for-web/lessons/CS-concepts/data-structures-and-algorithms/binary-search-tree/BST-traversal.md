# BST Traversal

> [!definition] BST Traversal
> The process of reading/processing the data of each node in the tree
> exactly once in some order.

There are two general techniques of tree traversal:

1. **Breadth-first BFS:** Starting at the root, visit all the nodes at
   the present depth before moving onto the nodes at the next level.
   Level-by-level traversing, stacking from left to right.

2. **Depth-first DFS**: Starting at the root node, visit each branch
   exhaustively before backtracking for the next branch.

    There are three popular sub-techniques for DFS with the
    corresponding stacking order:
    1. Preorder: Root -> Left -> Right
    2. Inorder: Left -> Root -> Right
    3. Postorder: Left -> Right -> Root
