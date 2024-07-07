//PUSH  ADDS TO THE END 

/**
 * PUSHING PSEUDOCODE:
 * 1. create a new node using hte value passed to the function
 * 2. If there is no head property on the list, set the head and tail to be newly created node
 * 3. Otherwise set the next property on the tail to be the new node and set the tail property ont he list to be the newly created node
 * 4. increment the length by 1
 * 5. return the linkedList
 */

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        // * 1. create a new node using hte value passed to the function
        let newNode = new Node(val);

        //* 2. If there is no head property on the list, set the head and tail to be newly created node
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        //* 3. Otherwise set the next property on the tail to be the new node and set the tail property ont he list to be the newly created node
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        //* 4. increment length by 1
        this.length++
        //* 5. return the linked list
        return this


    }
}

var first = new Node("Hi")
//first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
console.log(list.push("HELLO"))
console.log(list.push("GOODBYE"))
