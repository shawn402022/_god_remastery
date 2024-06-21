// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // create node to add
        const newNode = new SinglyLinkedNode(val)
        // Add node of val to head of linked list

        // Your code here
        newNode.next = this.head;
        this.head = newNode;
        this.length ++
        return this

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        let curr = this.head
        if(!this.length) return undefined
        if(this.head) {

            this.head = this.head.next;
            this.length--;

        }
        return curr


        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        let curr = this.head;
        let prev;

        if(!this.length) return undefined
        if(this.length === 1) this.head = null
        while(curr.next){
            prev = curr
            curr = curr.next;
        }

        prev = null

        this.length--
        return curr
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        let curr = this.head
        // Return the value of head node
        if(!this.length) return undefined
        if(this.length >= 1) return curr


        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        let curr = this.head;

        while(curr){
            process.stdout.write(`${curr.val} -> `);
            curr = curr.next

        }
        console.log("NULL")

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
