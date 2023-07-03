class Stack {
	/**
	 * The constructor is executed when instantiating a new Stack() to construct
	 * a new instance.
	 * @returns {Stack} This new Stack instance is returned without having to
	 *    explicitly write 'return' (implicit return).
	 */
	constructor() {
		this.items = [];
	}

	/**
	 * Adds a new given item to the top / back of this stack.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @param {any} item The new item to be added to the top / back.
	 * @returns {number} The new length of this stack.
	 */
	push(item) {
		this.items.push(item);
		return this.size();
	}

	/**
	 * Removes the top / last item from this stack.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @returns {any} The removed item or undefined if this stack was empty.
	 */
	pop() {
		return this.items.pop();
	}

	/**
	 * Retrieves the top / last item from this stack without removing it.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @returns {any} The top / last item of this stack.
	 */
	peek() {
		return this.items[this.items.length - 1];
	}

	/**
	 * Returns whether or not this stack is empty.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @returns {boolean}
	 */
	isEmpty() {
		return this.items.length === 0;
	}

	/**
	 * Returns the size of this stack.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @returns {number} The length.
	 */
	size() {
		return this.items.length;
	}
}



/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */

class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * Determines whether the sum of the left half of the queue items is equal to
     * the sum of the right half. Avoid indexing the queue items directly via
     * bracket notation, use the queue methods instead for practice.
     * Use no extra array or objects.
     * The queue should be returned to it's original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Whether the sum of the left and right halves is equal.
     */
    isSumOfHalvesEqual() { 
        let sumStart = 0;
        let sumEnd = 0;
        
        for (let i = 0; i < Math.floor(this.size() / 2); i ++) {
            let valStart = this.dequeue();
            sumStart += valStart;
            this.enqueue(valStart);
        }

        if (this.size() % 2 != 0) {
            let val = this.dequeue();
            this.enqueue(val);
        }

        for (let i = 0; i < Math.floor(this.size() / 2); i ++) {
            let valEnd = this.dequeue();
            sumEnd += valEnd;
            this.enqueue(valEnd);
        }

        return sumStart == sumEnd;
    }

    /**
     * Compares this queue to another given queue to see if they are equal.
     * Avoid indexing the queue items directly via bracket notation, use the
     * queue methods instead for practice.
     * Use no extra array or objects.
     * The queues should be returned to their original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Queue} q2 The queue to be compared against this queue.
     * @returns {boolean} Whether all the items of the two queues are equal and
     *    in the same order.
     */
    compareQueues(q2) { 
        let bool = true;
        for (let i = 0; i < this.size(); i++) {
            let val1 = this.dequeue();
            let val2 = q2.dequeue();
            if (bool == true && val1 != val2) {
                bool = false;
            }
            this.enqueue(val1)
            q2.enqueue(val2)
        }
        return bool;
    }

    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isPalindrome() { 
        let bool = true;
        let stack = new Stack();
        for (let i = 0; i < this.size(); i++) {
            let val = this.dequeue();
            stack.push(val);
            this.enqueue(val);
        }
        for (let i = 0; i < this.size(); i++) {
            let val = stack.pop();
            let val2 = this.dequeue();
            if (bool == true && val != val2) {
                bool = false;
            }
            this.enqueue(val2);
        }
        return bool;
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) { 
        this.items.push(item);
        return this.items.length;
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() { 
        if (this.isEmpty()) {
            return undefined;
        }
        const temp = this.items[0];
        // if (this.items.length > 1) {

        // }
        for (let i = 0; i < this.items.length - 1; i++) {
            this.items[i] = this.items[i+1];
        }
        
        this.items.pop()
        return temp;
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() { 
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0]
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() { 
        if (this.items.length == 0)
        {
            return true;
        }
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() { 
        return this.items.length
    }
}


let test = new Queue();
test.enqueue(5)
test.enqueue(1)
test.enqueue(3)
test.enqueue(4)
test.enqueue(2)
// let test2 = new Queue();
// test2.enqueue(2)
// test2.enqueue(3)
// test2.enqueue(3)
// test2.enqueue(4)

console.log(test.isSumOfHalvesEqual())


/* Rebuild the above class using a linked list instead of an array. */
class DoubleQueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    

    enqueue(data) {
        const newNode = new DoubleQueueNode(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        // return this.size();
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        let temp = this.head.data;
        if (this.head.next == null) {
            this.head = null;
            this.tail = null;
        }
        this.head = this.head.next;
        this.head.prev = null;
        return temp
    }

    front() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.head.data
    }


    isEmpty() {
        if (this.head == null) {
            return true;
        }
    }


    size() {
        if (this.isEmpty()) {
            return 0
        }
        let current = this.head;
        let counter = 0;
        while (current) {
            // console.log(counter)
            counter ++
            current = current.next;
        } 
        return counter
    }

    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }
}

// let nodeTest = new DoublyLinkedQueue();
// nodeTest.enqueue(2)
// nodeTest.enqueue(3)
// nodeTest.enqueue(4)
// nodeTest.enqueue(5)
// console.log(nodeTest.tail)
// console.log(nodeTest.toArray())
// console.log(nodeTest.size())

