// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stackA = new Stack();
        this.stackB = new Stack();
    }

    add(record) {
        this.stackA.push(record)
    }

    remove() {
        //moves items from A to B while item exists
        while(this.stackA.peek()) {
            this.stackB.push(this.stackA.pop())
        }

        //removes the last item in B and save
        const record = this.stackB.pop();

        //moves item back from B to A
        while(this.stackB.peek()) {
            this.stackA.push(this.stackB.pop())
        }

        //return item popped and saved, from B
        return record;
    }

    peek() {
        //pushes everything to B from A, while item exists in A
        while(this.stackA.peek()) {
            this.stackB.push(this.stackA.pop())
        }

        //save peek of B into a variable
        const record = this.stackB.peek()

        //push items back into A from B
        while(this.stackB.peek()) {
            this.stackA.push(this.stackB.pop())
        }

        return record;
    }
}

module.exports = Queue;
