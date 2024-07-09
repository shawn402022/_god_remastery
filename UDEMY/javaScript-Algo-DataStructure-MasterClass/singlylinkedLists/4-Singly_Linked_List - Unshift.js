//UNSHIFT ADDS TO THE BEGINNING OF A LIST

/**
 * Unshift PSEUDOCODE:
 *
 * 1. Create a new node using values passed to the function;
 * 2. If there is no head property on the list, set the head and tail to be the newly created node
 * 3. Otherwise set the newly created Node's next property to be the current head property on the list
 * 4. Set the head property on the list to be that newly created node;
 * 5. Increment the length of the list by 1;
 * 6. Return the linked list
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
    //* 1. Create a new node using values passed to the function;
    let newNode  = new Node(val);
    //* 2. If there is no head property on the list, set the head and tail to be the newly created node
    if(!this.head){
        this.head = newNode;
        this.tail = this.head;
    } else {
        //* 3. Otherwise set the newly created node's next property to be the current head property on the list
        newNode.next = this.head;
        //* 4. Set the head property on the list to be that newly created node;
        this.head = newNode
    }
    //* 5. Increment the length of the list by 1;
    this.length++
    //* 6. Return the linked list;
    return this
    }
}

var list = new SinglyLinkedList()
console.log(list.push("HELLO"))
console.log(list.push("GOODBYE"))
console.log(list.push("!"))
