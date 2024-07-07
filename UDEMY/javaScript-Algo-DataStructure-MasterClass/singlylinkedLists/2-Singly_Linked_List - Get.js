//"GET" RETRIEVES A NODE BY IT'S POSITION IN THE LINKED LIST

/**
 * "Get" PSEUDOCODE:
 *
 * 1. If the index is less than zero or greater than or equal to the length of the list, return null;
 * 2. Loop through the list until you reach the index and return the node at that specific index.
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
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index){
    //* 1. If the index is less than zero or greater than or equal to the length of the list, return null;
    if(index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    //* 2. Loop through the list until you reach the index and return the node at that specific index.
    while(counter < index){
        current = current.next
        process.stdout.write(`${list} -> `);

        counter++
    }
    console.log(current)
    return current
    }
}

var list = new SinglyLinkedList()

list.push("HELLO")
list.push("GOODBYE")
list.push("!")
list.push("<3")
list.push(":)")
console.log(list.get(4))
