//SHIFT REMOVES A NEW NODE FROM THE BEGINNING OF THE LINKED LIST


/**
 * Shifting PSEUDOCODE:
 *
 * 1. If there are no nodes, return undefined;
 * 2. Store the current head property in a variable;
 * 3. Set the head property to be the current head's next property;
 * 4. Decrement the length by 1;
 * 5. Return the value of the node removed.
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
    //* 1. If there are no nodes, return undefined;
    if(!this.head) return undefined;
    //* 2. Store the current head property in a variable;
    let current = this.head;
    //* 3. Set the head property to be the current head's next property;
    this.head = current.next
    //* 4. Decrement the length by 1;
    this.length--
    //* 5. Return the value of the node removed.
    return current

    }
}


var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
