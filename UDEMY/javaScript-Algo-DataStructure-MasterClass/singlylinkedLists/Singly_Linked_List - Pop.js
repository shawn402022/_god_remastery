// POP REMOVES FROM THE END
/**
 * POP PSEUDOCODE
 * 1. If there is nothing in the list, return undefined.
 * 2. Loop through the list until you reach the tail
 * 3. have a variable that keeps track of the last item
 * 4. Update the tail to be the 2nd to last node
 * 5. Set the next property to the 2nd to last to be null
 * 6. Decrement the length of the list by 1
 * 7. Return the value of the node removed.
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
    //* 1. If there is nothing in the list, return undefined.
    if(!this.head) return undefined
    let current = this.head;
    let newTail =  current;
    //* 2. Loop through the list until you reach the tail
    while(current.next){
         //* 3. have a variable that keeps track of the current item and next item
        newTail = current;
        current = current.next;
    }

    //* 4. Update the tail to be the 2nd to last node
    this.tail = newTail;
    //* 5. Set the next property to the 2nd to last to be null
    this.tail.next = null;
    //* 6. Decrement the length of the list by 1
    this.length--;
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
    //* 7. Return the value of the node removed.
    return current;
    }
}


var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
