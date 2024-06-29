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
    let data = [];
    function traverse(currentNode){
    console.log(currentNode.val)
    data.push(currentNode);
    if(currentNode.left) traverse(currentNode.left);
    if(currentNode.right) traverse(currentNode.right);
    }
    traverse(currentNode);
    return data
}


inOrderTraversal(currentNode = this.root) {
    // Your code here
    let data = [];
    function traverse(currentNode){

    if(currentNode.left) traverse(currentNode.left);
    console.log(currentNode.val)
    data.push(currentNode);
    if(currentNode.right) traverse(currentNode.right);

    }
    traverse(currentNode);
    return data


}


postOrderTraversal(currentNode = this.root) {
    // Your code here
    let data = [];
    function traverse(currentNode){

    if(currentNode.left) traverse(currentNode.left);
    if(currentNode.right) traverse(currentNode.right);
    console.log(currentNode.val)
    data.push(currentNode);
    }
    traverse(currentNode);
    return data
}

    // Breadth First Traversal - Iterative
breadthFirstTraversal() {
    // Your code here

    let node = this.root
    let queue = [];
    let data = [];
    queue.push(node);

    while(queue.length) {
    node = queue.shift();
    console.log(node.val)
    data.push(node);
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);


    }
    return data;

}

// Depth First Traversal - Iterative
depthFirstTraversal() {
    // Your code here
    let currentNode = this.root
    let stack = [];
    let data = [];

    stack.push(currentNode);

    while(stack.length) {
    currentNode = stack.pop()
    console.log(currentNode.val)


    data.push(currentNode.left);
    if(currentNode.left) stack.push(currentNode.left);
    if(currentNode.right) stack.push(currentNode.right);

    }
    return data

}
}

  module.exports = { BinarySearchTree, TreeNode };
