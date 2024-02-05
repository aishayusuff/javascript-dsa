// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size(){
        //create a counter variable
        //assign head to a node variable
        //check that node exists and increment counter while node exists
        //resassign node to the next node

        let counter = 0
        let node = this.head;
        
        while(node) {
            counter++
            node = node.next
        }

        return counter;
    }

    getFirst() {
        return this.head; //this.head always points to the first node of a linkedList
    }

    getLast(){
        //handles edge case where no node exist
        if(!this.head) {
            return null;
        }

        let node = this.head

        while(node) {
            if(!node.next) {
                return node;
            }

            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(!this.head) {
            return;
        }

        this.head = this.head.next
    }
}


module.exports = { Node, LinkedList };
