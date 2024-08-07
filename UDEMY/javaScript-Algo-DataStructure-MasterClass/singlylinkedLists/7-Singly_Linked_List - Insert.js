//"INSERT" ADDS A NODE TO THE LINKED LIST AT A SPECIFIC POSITION

/**
 * "Insert" PSEUDOCODE:
 *
 * 1. If the index is less than zero or greater than the length, return false;
 * 2. If the index is   as the length, push a new node to the end of the list;
 * 3. If the index is 0, unshift a new node to the start of the list;
 * 4. Otherwise, using the "get" method, access the node at the index -1
 * 5. Set the next property on that node to be the new node;
 * 6. Set the new property on the new node to be the previous next;
 * 7. Increment the length;
 * 8. Return true
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
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        //* 1. If the index is less than zero or greater than the length, return false;
        if(index < 0 || index > this.length) return false;
        //* 2. If the index is   as the length, push a new node to the end of the list;
        if(index === this.length) return this.push(val);
        //* 3. If the index is 0, unshift a new node to the start of the list;
        if(index === 0) return this.unshift(val)
        //* 4. Otherwise, using the "get" method, access the node at the index -1
        const newNode = new Node(val);
        const temp = previous.next
        previous = this.get(index -1);

        //* 5. Set the next property on that node to be the new node;
       previous.next = newNode
        //* 6. Set the new property on the new node to be the previous next;
        newNode.next = temp
        //* 7. Increment the length;
        this.length++
        //* 8. Return true
        return true;

    }
}

var list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
