class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  addToHead(val) {
    // create a new node with the given value
    const newNode = new LinkedListNode(val, null);
    //set the node's  'next' pointer to the list's current head pointer
    newNode.next = this.head;
    //Set the list head to point to the new link
    this.head = newNode;
    this.length ++
  }

  addToTail(val) {
    // create a new node with the given value
    const newNode = new LinkedListNode(val,);
    // if the head is null set it to the new node and return;
    this.length++
    if(!this.head) {
      this.head = newNode;
      return this;
    } else {
      //iterate through thelinked list untill you reach the last node.

      let current = this.head;

      while(current.next) {
        current = current.next
      }
      // point the last node's pointer to the new node.
      current.next = newNode
    }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
