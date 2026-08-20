// This implementation was written by Gemini for expediting other exercises
// TODO: Rewrite this code

// 1. Define the Node building block
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null; // Points to the next node, initially null
    }
}

// 2. Define the Singly Linked List manager
export default class SinglyLinkedList {
    constructor() {
        this.head = null; // The start of the list
        this.size = 0; // Keeps track of the total elements
    }

    // Add a node to the end of the list (Append)
    append(key, value) {
        const newNode = new Node(key, value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
    }

    // Add a node to the beginning of the list (Prepend)
    prepend(key, value) {
        const newNode = new Node(key, value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Remove a node by its value
    remove(key) {
        if (!this.head) return false;

        // If the head needs to be removed
        if (this.head.key === key) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.key === key) {
                current.next = current.next.next; // Skip over the deleted node
                this.size--;
                return true;
            }
            current = current.next;
        }

        return false; // Value not found
    }

    // Find if a key exists in the list
    containsKey(key) {
        let current = this.head;
        while (current) {
            if (current.key === key) return true;
            current = current.next;
        }
        return false;
    }

    getKeys() {
        const res = [];
        let current = this.head;
        while (current) {
            if (current.key) res.push(current.key);
            current = current.next;
        }
        return res;
    }

    // Find if a value exists in the list
    containsValue(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    getValues() {
        const res = [];
        let current = this.head;
        while (current) {
            if (current.value) res.push(current.value);
            current = current.next;
        }
        return res;
    }

    // Print the entire list structure to the console
    printList() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.key);
            current = current.next;
        }
        console.log(result.join(' -> ') + ' -> null');
    }

    // Return the current size of the list
    getSize() {
        return this.size;
    }
}
