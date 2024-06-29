// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val, currentNode=this.root) {
    const newNode = new TreeNode(val)
    if( !this.root) {
      this.root = newNode;
      return this;
    } else {
      while(currentNode){
        if(val === currentNode.val) return undefined;
        if(val < currentNode.val){
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        }

        if(val > currentNode.val){
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          } else {
            currentNode =  currentNode.right
          }
        }
      }

    }
  }

  search(val) {
    // Your code here

    if(!this.root) return false;
    let currentNode = this.root;
    let found = false;

    while(currentNode && !found){
      if(val < currentNode.val){
        currentNode = currentNode.left
      } else if(val > currentNode.val){
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }
    return found;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here


  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
    let node = this.root
    let queue = [];
    let data = [];
    queue.push(node);
    console.log(node)
    while(queue.length) {
      node = queue.shift();
      data.push(node);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);


    }
    return data;

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here

  }
}

module.exports = { BinarySearchTree, TreeNode };
