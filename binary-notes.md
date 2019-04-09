# Binary Search Trees
http://thinkful.slides.com/thinkful/binary-search-trees#/8

Start with Root (head) Node
End with Leaf (terminal) Nodes

Each node has one parent
Only one path from one node to another

Root node is at level zero, its children at level 1, and so on.
Each node has two children max -- a left child and a right child.
Subtrees are also valid trees.
Number of nodes for a full tree is (2^height - 1).

by default, BSTs are O(log(n))

**Less-than values (to the root) to the left node**
**Greater-than values (to the root) to the right node**

Smallest value will always be the leftmost leaf node.
Largest value will always by the rightmost leaf node.

Duplicates (of the root) can go to the left or the right node.

## Creating a Binary Search Tree

````js
class _Node {
    constructor(key=null, value=null, parent=null) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(parent=null) {
        this.parent = parent;
    }
...
}
````

## Inserting Data

Left ptr and right ptr determine the correct position for the data.

*insert method:*
````js
      insert(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left == null) {
                this.left = new _Node(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new _Node(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }
````

## Retrieving values

Must read value of each node and determine if it is > or < its value, 
then go in the appropriate direction to find that value.

## Removing values

### Node with no children

Simply navigate down the tree to find the value, then remove the node.

### Node with 1 child

Navigate down the tree to find the value, then 'promote' its 1 child to replace the current node.

### Node with 2 children

Two cases:

Replace with largest value from left side OR
Replace with smallest value from right side of the current subtree.


## Today

* Draw a BST that results when you insert the keys - E A S Y Q U E S T I O N
* Implement a BST and compare your result