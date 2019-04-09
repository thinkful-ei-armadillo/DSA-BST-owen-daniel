'use strict';

const BinarySearchTree = require('./binary');

// Draw a BST
// Given the data 3,1,4,6,9,2,5,7, if you were to insert this into an empty binary search tree, what would the tree look like?
// (Draw the tree, no coding needed here.)

// answer: [https://www.dropbox.com/s/lflr844xl73cui0/Screenshot%202019-04-09%2011.11.44.png?dl=0]

// Draw the BST with the keys - E A S Y Q U E S T I O N

// answer [ https://www.dropbox.com/s/7cduzz37vecdnxx/Screenshot%202019-04-09%2011.19.07.png?dl=0]

// Remove the root
// Show how the above trees would look like if you deleted the root of each tree.
// (Draw the trees, no coding needed here.)

// answer 1: https://www.dropbox.com/s/2l6syfcurankfbm/Screenshot%202019-04-09%2011.21.44.png?dl=0
// answer 2: https://www.dropbox.com/s/qzb1m9pz3twyihq/Screenshot%202019-04-09%2011.24.14.png?dl=0

// Create a BST class
// Walk through the binary search tree code in the curriculum and understand it well.
// Then write a BinarySearchTree class with its core functions (insert(), remove(), find()) from scratch.

// class BinarySearchTree {
//   constructor(key = null, value = null, parent = null) {
//     this.key = key;
//     this.value = value;
//     this.parent = parent;
//     this.left = null;
//     this.right = null;
//   }

//   insert(key, value) {
//     if (this.key == null) {
//       this.key = key;
//       this.value = value;
//     } else if (key < this.key) {
//       if (this.left == null) {
//         this.left = new BinarySearchTree(key, value, this);
//       } else {
//         this.left.insert(key, value);
//       }
//     } else {
//       if (this.right == null) {
//         this.right = new BinarySearchTree(key, value, this);
//       } else {
//         this.right.insert(key, value);
//       }
//     }
//   }

//   find(key) {
//     if (this.key == key) {
//       return this.value;
//     } else if (key < this.key && this.left) {
//       return this.left.find(key);
//     } else if (key > this.key && this.right) {
//       return this.right.find(key);
//     } else {
//       throw new Error('Key Error in find');
//     }
//   }

//   remove(key) {
//     if (this.key == key) {
//       if (this.left && this.right) {
//         const successor = this.right._findMin();
//         this.key = successor.key;
//         this.value = successor.value;
//         successor.remove(successor.key);
//       } else if (this.left) {
//         this._replaceWith(this.left);
//       } else if (this.right) {
//         this._replaceWith(this.right);
//       } else {
//         this._replaceWith(null);
//       }
//     } else if (key < this.key && this.left) {
//       this.left.remove(key);
//     } else if (key > this.key && this.right) {
//       this.right.remove(key);
//     } else {
//       throw new Error('Key error in remove');
//     }
//   }

//   _replaceWith(node) {
//     if (this.parent) {
//       if (this == this.parent.left) {
//         this.parent.left = node;
//       } else if (this == this.parent.right) {
//         this.parent.right = node;
//       }

//       if (node) {
//         node.parent = this.parent;
//       }
//     } else {
//       if (node) {
//         this.key = node.key;
//         this.value = node.value;
//         this.left = node.left;
//         this.right = node.right;
//       } else {
//         this.key = null;
//         this.value = null;
//         this.left = null;
//         this.right = null;
//       }
//     }
//   }

//   _findMin() {
//     if (!this.left) {
//       return this;
//     }
//     return this.left._findMin();
//   }
// }

// Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into your tree.
// Compare your result with the result from the 1st exercise.
// Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree.
// Compare your result with the result from the 1st exercise.
function main() {
  let BST = new BinarySearchTree();

  // BST.insert('3', 3);
  // BST.insert('1', 1);
  // BST.insert('4', 4);
  // BST.insert('6', 6);
  // BST.insert('9', 9);
  // BST.insert('2', 2);
  // BST.insert('5', 5);
  // BST.insert('7', 7);

  // BST.insert('E', 'E');
  // BST.insert('A', 'A');
  // BST.insert('S', 'S');
  // BST.insert('Y', 'Y');
  // BST.insert('Q', 'Q');
  // BST.insert('U', 'U');
  // BST.insert('E', 'E');
  // BST.insert('S', 'S');
  // BST.insert('T', 'T');
  // BST.insert('I', 'I');
  // BST.insert('O', 'O');
  // BST.insert('N', 'N');

  // BST.insert('30', 30);
  // BST.insert('18', 18);
  // BST.insert('50', 50);
  // BST.insert('24', 24);
  // BST.insert('36', 36);
  // BST.insert('51', 51);

  // console.log(BST);

  // console.log(height(BST));
  // console.log(isTree(BST));

  // console.log(thirdLargest(BST));

  // console.log(checkBalance(BST));

  let array1 = [3, 5, 4, 6, 1, 0, 2];
  let array2 = [3, 1, 5, 2, 4, 6, 0];

  console.log(equalBST(array1, array2));
}

main();

// What does this program do?
// Without running this code in your code editor, explain what the following program does.
// Show with an example the result of executing this program. What is the runtime of this algorithm?

function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

// this function adds the value of all nodes in the BST by calling the function recursively and passing in each child node of the current node.
// it would return a final numerical value as the total value of the tree, if the values are numbers.
// if strings, it will concatenate all characters together from the leftmost node to the rightmost node of the the BST.
// O(2n)

// Height of a BST
// Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?

function height(BST, count = 1) {
  if (BST.key === null) {
    return 0;
  }

  // base case
  if (!BST.left && !BST.right) {
    return count;
  }

  // if two children
  if (BST.right && BST.left) {
    return height(BST.left, count + 1) > height(BST.right, count + 1)
      ? height(BST.left, count + 1)
      : height(BST.right, count + 1);
  }

  // if one child on left
  if (BST.left) {
    return height(BST.left, count + 1);
  }

  // if one child on right
  if (BST.right) {
    return height(BST.right, count + 1);
  }
}
// O(log(n)^2)

// Is it a BST?
// Write an algorithm to check whether an arbitrary binary tree is a binary search tree,
// assuming the tree does not contain duplicates.

function isTree(t) {
  // if no root, not a tree
  if (!t.key) {
    return false;
  }

  // if two children
  if (t.right && t.left) {
    isTree(t.right);
    isTree(t.left);
  }
  // if only a right child
  if (t.right) {
    if (t.right.key < t.key) {
      return false;
    } else {
      return isTree(t.right);
    }
  }
  // if only a left child
  if (t.left) {
    if (t.left.key > t.key) {
      return false;
    } else {
      return isTree(t.left);
    }
  }

  // if at end of the tree
  if (!t.right && !t.left) {
    return true;
  }
}
// O(log(n)^2)
// maybe O(n)????

// 3rd largest node
// Write an algorithm to find the 3rd largest node in a binary search tree.

// find largest value
// remove largest
// call until on 3rd largest

// input: (BST, count=1)
// traverse and remove right most node
// if (node.right === null )

function thirdLargest(bst, count = 1) {
  if (count >= 3) {
    return bst.value;
  }

  if (bst.right !== null) {
    return thirdLargest(bst.right, count);
  }
  if (bst.right === null) {
    bst.remove(bst.key);
    return thirdLargest(bst.parent, (count += 1));
  }
}

// Balanced BST
// Write an algorithm that checks if a BST is balanced (i.e., a tree where no 2 leaves differ in distance
// from the root by more than 1).

function checkBalance(BST, count = 0) {
  if (BST.key === null) {
    return 0;
  }

  // if two children
  if (BST.right && BST.left) {
    return Math.abs(
      height(BST.left, count + 1) - height(BST.right, count + 1)
    ) > 1
      ? false
      : true;
  }

  // if one child on left
  if (BST.left) {
    if (BST.left.left || BST.left.right) {
      return false;
    }
    return checkBalance(BST.left, count + 1);
  }

  // if one child on right
  if (BST.right) {
    if (BST.right.left || BST.right.right) {
      return false;
    }
    return checkBalance(BST.right, count + 1);
  }
  if (!BST.left && !BST.right) {
    return Math.abs(
      height(BST.left, count + 1) - height(BST.right, count + 1)
    ) > 1
      ? false
      : true;
  }
}

// Are they the same BSTs?
// You are given two arrays which represent two sequences of keys that are used to create two binary search trees.
// Write a program that will tell whether the two BSTs will be identical or not without actually constructing the tree.
// You may use another data structure such as an array or a linked list but don't construct the BST. What is the time
// complexity of your algorithm? E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays but
// will create the exact same BSTs and your program should return true.

// simple dq case: arr1[0] !== arr2[0]

//first item greater than (first right tree item) arr1[0] must equal first item greater than arr2[0]
// opposite true about less than items (left tree items)

function equalBST(arr1, arr2) {
  if (arr1[0] !== arr2[0]) {
    return false;
  }
  while (arr1.length > 0 && arr2.length > 0) {
    let nextRightNode;
    let nextLeftNode;
    let nextRightNode2;
    let nextLeftNode2;

    for (let item of arr1) {
      if (item > arr1[0]) {
        nextRightNode = item;
        break;
      }
    }
    for (let item of arr1) {
      if (item < arr1[0]) {
        nextLeftNode = item;
        break;
      }
    }

    for (let item of arr2) {
      if (item > arr2[0]) {
        nextRightNode2 = item;
        break;
      }
    }
    for (let item of arr2) {
      if (item < arr2[0]) {
        nextLeftNode2 = item;
        break;
      }
    }
    if (nextRightNode !== nextRightNode2) {
      return false;
    }

    if (nextLeftNode !== nextLeftNode2) {
      return false;
    }

    arr1 = arr1.splice(0, 1);
    arr2 = arr2.splice(0, 1);

    // arr1.splice(arr1.indexOf(nextGreatestItem), 1);
    // arr1.splice(arr1.indexOf(nextLeastItem), 1);

    // arr2.splice(arr2.indexOf(nextGreatestItem2), 1);
    // arr2.splice(arr2.indexOf(nextLeastItem2), 1);
  }

  //remove all 3 items from both arrays
}
