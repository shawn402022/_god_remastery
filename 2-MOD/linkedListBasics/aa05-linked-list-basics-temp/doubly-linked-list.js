class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // create the new node
    const newNode = new DoublyLinkedListNode(val);
    //if the list is empty, point head and tail to new node and return
    
    if(this.length >= 1){
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode
      
    } else {
      //point the current tail's next to the new node.
      this.head = newNode;
      //point tail to the newNode
      this.tail = newNode
    }

    this.length++
    
      
  }

  addToTail(val) {
    // create new node
    const newNode = new DoublyLinkedListNode(val)

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;

    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
