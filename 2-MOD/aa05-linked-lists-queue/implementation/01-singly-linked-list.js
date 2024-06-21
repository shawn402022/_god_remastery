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
        if (!this.length) return undefined;
        else if (this.length === 1) {
            return this.removeFromHead()
        }

        let curr = this.head;
        while (curr.next.next !== null) {
            curr = curr.next;
        }
        const tempVar = curr.next

        curr.next = null
        this.length--
        return tempVar

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {

        // Return the value of head node
        if (!this.length) return undefined
        else return this.head.value


        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        if(this.length > 0){
            let curr = this.head;
            while (curr.next !== null) {
                console.log(curr.value)
                curr = curr.next;
            }

            console.log(curr.value)
        } 

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
